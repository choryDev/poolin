package in.pool.server.service.sign;

import in.pool.server.domain.types.UserAccountTypes;
import in.pool.server.domain.types.UserStatusTypes;
import in.pool.server.domain.types.YesNoTypes;
import in.pool.server.domain.user.*;
import in.pool.server.dto.ResponseDto;
import in.pool.server.dto.sign.*;
import in.pool.server.repositories.user.*;
import in.pool.server.service.CoreSpace;
import in.pool.server.utils.Crypt;
import in.pool.server.utils.EmailCheck;
import in.pool.server.utils.SendMails;
import in.pool.server.utils.keys.EMAILS;
import in.pool.server.utils.keys.SESSION;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.Optional;

@Service
public class SignService extends CoreSpace {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserInfoRepository infoRepository;

    @Autowired
    private UserAccountRepository userAccountRepository;

    @Autowired
    private UserAuthorizationRepository authorizationRepository;

    @Autowired
    private UserPasswordRepository userPasswordRepository;

    @Autowired
    private UserFindPwdRepository findPwdRepository;

    @Transactional(rollbackFor = {
        Exception.class, Throwable.class
    })
    public ResponseDto requestSignUp(SignReqDto requestDto){
        String email = requestDto.getEmail();
        String key = "";
        if (email == null || "".equals(email)) writeError(requestDto, "900-001");
        if (!EmailCheck.isValidEmailAddress(email)) writeError(requestDto, "900-002");
        Optional<User> user = userRepository.findByEmail(requestDto.getEmail());
        if(!user.isPresent()){
            // 존재하지 않을 경우, 초대이메일 보내기.
            // srv_usr_mst, srv_usr_acc, srv_usr_auth, srv_usr_info, srv_usr_pwd
            User newUser = new User();
            newUser.setStatus(UserStatusTypes.PENDING);
            newUser.setEmail(email);
            userRepository.save(newUser);

            UserInfo info = new UserInfo();
            info.setUser(newUser);
            infoRepository.save(info);

            UserAccount account = new UserAccount();
            account.setUserNo(newUser.getUserNo());
            account.setAccountType(UserAccountTypes.EMAIL);
            userAccountRepository.save(account);

            UserAuthorization authorization = new UserAuthorization();
            key = Crypt.newCrypt().SHA256(String.valueOf(System.currentTimeMillis()));
            authorization.setUser(newUser);
            authorization.setValidationDate(LocalDateTime.now());
            authorization.setValidationStatus(YesNoTypes.NO);
            authorization.setValidationCode(key);
            authorizationRepository.save(authorization);

            UserPassword password = new UserPassword();
            password.setUser(newUser);
            userPasswordRepository.save(password);

        }else {
            // 이메일이 존재. 사용자 상태검사 (활성화된 상태인지 초대장을 받고 아직 처리하지않은 사용자인지)
            if(user.get().getStatus() == UserStatusTypes.ACTIVE) writeError(requestDto, "900-000", HttpStatus.BAD_REQUEST);
            key = Crypt.newCrypt().SHA256(user.get().getUserNo() + String.valueOf(System.currentTimeMillis()));
            String finalKey = key;
            authorizationRepository
                .findByUser(user.get())
                .stream()
                .forEach(authorization -> {
                    authorization.setValidationCode(finalKey);
                    authorization.setValidationStatus(YesNoTypes.NO);
                    authorization.setValidationDate(LocalDateTime.now());
                    authorizationRepository.save(authorization);
                });
        }

        String link;

        if(bePresent(requestDto.getWorkspace_id())){
            // Workspace로부터 요청
            link = "<a type=\"button\" href=\""
                + EMAILS.INVITE_URL + "?email=" + email + "&key=" + key + "&c=" + "" + "\">";
        }else {
            // 일반 회원가입
            link = "<a type=\"button\" href=\""
                + EMAILS.INVITE_URL + "?email=" + email + "&key=" + key + "\">";
        }

        // TODO: 이메일모듈 추가하기.
        SendMails.getInstance()
            .setEMAIL(email)
            .setTITLE("The invitation for Signing up.")
            .setCONTENT(b -> {
                b.append("<body>");
                b.append("<button type=\"button\" >");
                b.append(link);
                b.append("Sign up");
                b.append("</a></button >");
                b.append("</body>");
                return b;
            }).send();
        MessageResDto response = new MessageResDto();
        response.setMessage(getMessage(requestDto, "800-001"));
        return response;
    }

    @Transactional(rollbackFor = {
        Exception.class, Throwable.class
    })
    public ResponseDto signIn(SignReqDto requestDto){
        SignResponseDto response = new SignResponseDto();

        String id = requestDto.getId();
        String password = requestDto.getPassword();

        if(!bePresent(id)) writeError(requestDto, "900-003");
        if(!bePresent(password)) writeError(requestDto, "900-004");

        Optional<User> user;

        if (EmailCheck.isValidEmailAddress(id)) {
            user = userRepository.findByEmailAndStatus(id, UserStatusTypes.ACTIVE);
        } else {
            user = userRepository.findByUsernameAndStatus(id, UserStatusTypes.ACTIVE);
        }

        if(!user.isPresent()) writeError(requestDto, "900-005", HttpStatus.BAD_REQUEST);
        Optional<UserPassword> userPassword = userPasswordRepository.findByUser(user.get());

        String requestedPwd = Crypt.newCrypt().getPassword(password, userPassword.get().getSalt());
        String crypedPwd = userPassword.get().getPassword();

        if(!bePresent(requestedPwd) || !bePresent(crypedPwd) || !requestedPwd.equals(crypedPwd))
            writeError(requestDto, "900-006", HttpStatus.BAD_REQUEST);

        String sessAuthKey = setSessAuthKey(user.get(), requestDto);

        ifAcceptInvitation(user.get(), requestDto);

        response.setToken(sessAuthKey);
        response.setUsername(user.get().getUsername());

        return response;
    }

    @Transactional(rollbackFor = {
        Exception.class, Throwable.class
    })
    public ResponseDto signUp(SignReqDto reqDto){
        SignResponseDto response = new SignResponseDto();

        // Check Validation
        if(!bePresent(reqDto.getEmail())) writeError(reqDto, "900-001");
        if(!bePresent(reqDto.getUsername())) writeError(reqDto, "900-026");
        if(!bePresent(reqDto.getPassword())) writeError(reqDto, "900-004");
        if(!bePresent(reqDto.getConfirm_password())) writeError(reqDto, "900-011");

        UserKeyDto userKey = (UserKeyDto)getItem("sess.session.getIdUsingKey", reqDto);
        User user = map(userKey, User.class);

        if(UserStatusTypes.ACTIVE.equals(user.getStatus())) writeError(reqDto, "900-024", HttpStatus.BAD_REQUEST);;
        if(YesNoTypes.YES.equals(userKey.getValidationStatus())) writeError(reqDto, "900-024", HttpStatus.BAD_REQUEST);;
        if(!userKey.getAvailYn()) writeError(reqDto, "900-008", HttpStatus.BAD_REQUEST);

        String chkIdDuplicate = (String)getItem("sess.session.chkIdDuplicate", reqDto);
        if (!reqDto.getUsername().matches("[a-zA-Z0-9]*")) writeError(reqDto, "900-034");
        if (chkIdDuplicate != null && !"".equals(chkIdDuplicate)) writeError(reqDto, "900-027");
        if (!reqDto.getPassword().equals(reqDto.getConfirm_password())) writeError(reqDto, "900-007");

        String salt = Crypt.newCrypt().getSalt(128);
        String crypted_pwd = Crypt.newCrypt().getPassword(reqDto.getPassword(), salt);

        UserPassword password = new UserPassword();
        password.setUser(user);
        password.setUserNo(user.getUserNo());
        password.setSalt(salt);
        password.setPassword(crypted_pwd);
        password.setUpdatedDate(LocalDateTime.now());

        UserInfo info = new UserInfo();
        info.setUser(user);
        info.setUserNo(user.getUserNo());
        info.setName(reqDto.getName());
        info.setUpdatedDate(LocalDateTime.now());

        UserAuthorization authorization = new UserAuthorization();
        authorization.setUser(user);
        authorization.setUserNo(user.getUserNo());
        authorization.setValidationStatus(YesNoTypes.YES);
        authorization.setValidationDate(LocalDateTime.now());

        user.setStatus(UserStatusTypes.ACTIVE);
        user.setUsername(reqDto.getUsername());
        user.setUpdatedDate(LocalDateTime.now());

        userRepository.save(user);
        infoRepository.save(info);
        userPasswordRepository.save(password);
        authorizationRepository.save(authorization);


        String sessAuthKey = setSessAuthKey(user, reqDto);

        ifAcceptInvitation(user, reqDto);

        response.setToken(sessAuthKey);
        response.setUsername(user.getUsername());

        return response;
    }

    @Transactional(rollbackFor = {
        Exception.class, Throwable.class
    })
    public ResponseDto requestResetPwd(SignReqDto requestDto){
        ResponseDto response = new ResponseDto();
        userRepository
            .findByEmail(requestDto.getEmail())
            .ifPresentOrElse(user -> {
                String key = Crypt.newCrypt().SHA256(user.getUsername() + System.currentTimeMillis());
                UserFindPassword findPassword = new UserFindPassword();
                findPassword.setUser(user);
                findPassword.setUserNo(user.getUserNo());
                findPassword.setValidationCode(key);
                findPwdRepository.save(findPassword);

                // todo: 이메일 보내기
//                String link = "<a type=\"button\" href=\""
//                    + EMAILS.FORGOT_PWD_URL + "?email=" + requestDto.getEmail() + "&key=" + key + "\">";
//
//                SendMails
//                    .getInstance()
//                    .setEMAIL(requestDto.getEmail())
//                    .setTITLE("Set New Password")
//                    .setCONTENT(b -> {
//                        b.append("<body>");
//                        b.append("<button type=\"button\" >");
//                        b.append(link);
//                        b.append("Set new password");
//                        b.append("</a></button >");
//                        b.append("</body>");
//                        return b;
//                    }).send();

            }, () -> writeError(requestDto, "900-005"));
        return response;
    }

    // email, key, password, confirm_password
    public ResponseDto resetPassword(SignReqDto requestDto){
        ResponseDto response = new ResponseDto();
        String email = requestDto.getEmail();
        String password = requestDto.getPassword();
        String key = requestDto.getKey();
        String confirmPassword = requestDto.getConfirm_password();
        if (!bePresent(key)) writeError(requestDto, "900-000");
        if (!bePresent(password)) writeError(requestDto, "900-010");
        if (!bePresent(confirmPassword)) writeError(requestDto, "900-011");
        if(!confirmPassword.equals(password)) writeError(requestDto, "900-007");
//        writeError(requestDto, "900-008");

        UserFindPasswordDto findPasswordDto = (UserFindPasswordDto)getItem("sess.session.findUserAtResetPassword", requestDto);
        if(findPasswordDto == null) writeError(requestDto, "900-008");

        User user = map(findPasswordDto, User.class);
        UserFindPassword findPassword = map(findPasswordDto, UserFindPassword.class);

        if(!key.equals(findPassword.getValidationCode())) writeError(requestDto, "900-008");
        if(!findPasswordDto.isAvailYn()) writeError(requestDto, "900-008");

        String salt = Crypt.newCrypt().getSalt(128);
        String cryptedPassword = Crypt.newCrypt().getPassword(password, salt);
        UserPassword userPassword = new UserPassword();
        userPassword.setUserNo(user.getUserNo());
        userPassword.setUser(user);
        userPassword.setBakPassword(userPassword.getPassword());
        userPassword.setSalt(salt);
        userPassword.setPassword(cryptedPassword);
        userPassword.setUpdatedDate(LocalDateTime.now());

        userPasswordRepository.save(userPassword);
        findPwdRepository.delete(findPassword);

        return response;
    }

    private void ifAcceptInvitation(User user, SignReqDto signReqDto){
        String workspaceId = signReqDto.getWorkspace_id();

        if(bePresent(workspaceId)){
            // todo: Workspace 초대 수락하기.

        }
    }

    private String setSessAuthKey(User user, SignReqDto reqDto){
        // 신규유저 세션키 발급
        // 1. 세션키생성 (jwt)
        // - 유저정보 + SALT
        String salt = "";
        String sessAuthKey = "";
        try {
            salt = Crypt.newCrypt().getSalt(64);
            sessAuthKey = Jwts.builder()
                .setIssuer(SESSION.TOKEN_ISSURE)
                .setSubject(SESSION.TOKEN_NAME)
                .claim("__email__", user.getEmail())
                .claim("__username__", user.getUsername())
                .setIssuedAt(new Date())
                .signWith(
                    SignatureAlgorithm.HS256,
                    salt.getBytes("UTF-8")
                ).compact();
        } catch (Throwable e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }

        // Session Key
        reqDto.setSess_user_no(user.getUserNo());
        reqDto.setSess_salt(salt);
        reqDto.setSess_auth_key(sessAuthKey);

        // 2. 세션키 저장
        deleteObject("sess.session.deleteUserSess", reqDto);
        insertObject("sess.session.insertUserSess", reqDto);

        return sessAuthKey;
    }

}
