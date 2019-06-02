package in.pool.server.service.workspace;

import in.pool.server.domain.types.AuthTypes;
import in.pool.server.domain.types.UserStatusTypes;
import in.pool.server.domain.user.User;
import in.pool.server.domain.workspace.Workspace;
import in.pool.server.domain.workspace.WorkspaceInfo;
import in.pool.server.domain.workspace.WorkspaceMember;
import in.pool.server.dto.RequestDto;
import in.pool.server.dto.ResponseDto;
import in.pool.server.dto.workspace.WorkspaceReqDto;
import in.pool.server.dto.workspace.WorkspaceResDto;
import in.pool.server.dto.workspace.mapping.MyStatusWorkspace;
import in.pool.server.repositories.user.UserRepository;
import in.pool.server.repositories.workspace.WorkspaceInfoRepository;
import in.pool.server.repositories.workspace.WorkspaceMemberRepository;
import in.pool.server.repositories.workspace.WorkspaceRepository;
import in.pool.server.service.CoreSpace;
import in.pool.server.service.sign.SignService;
import in.pool.server.utils.AutoKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;

@Service
@Transactional(rollbackFor = {
    Exception.class, Throwable.class
})
public class WSSaveService extends CoreSpace {

    @Autowired
    private AutoKey autoKey;

    @Autowired
    private WorkspaceRepository workspaceRepository;

    @Autowired
    private WorkspaceInfoRepository infoRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private WorkspaceMemberRepository memberRepository;

    @Autowired
    private SignService signService;

    public ResponseDto saveNewWorkspace(WorkspaceReqDto reqDto){
        WorkspaceResDto response = new WorkspaceResDto();
        Map keyMap = new HashMap();
        keyMap.put("autono_tp", "workspace");

        Workspace workspace = new Workspace();
        workspace.setInsertedUser(reqDto.getSessUser());
        String workspaceId = autoKey.makeGetKey(keyMap);
        reqDto.setWorkspace_id(workspaceId);
        workspace.setWorkspaceId(workspaceId);
        workspaceRepository.save(workspace);

        WorkspaceInfo info = new WorkspaceInfo();
        info.setDescription(reqDto.getWs_description());
        info.setWorkspaceName(reqDto.getWs_name());
        info.setWorkspace(workspace);
        info.setWorkspaceNo(workspace.getWorkspaceNo());
        info.setUpdatedDate(LocalDateTime.now());
        infoRepository.save(info);

        // 나를 등록
        WorkspaceMember me = new WorkspaceMember();
        me.setWorkspaceNo(workspace.getWorkspaceNo());
        me.setUserNo(reqDto.getSess_user_no());
        me.setStatus(UserStatusTypes.ACTIVE);
        me.setAuthType(AuthTypes.APROVAL);
        memberRepository.save(me);

        // 초대 유저
        reqDto.getUsers()
            .stream()
            .forEach(email -> {
                userRepository
                    .findByEmailAndStatus(email, UserStatusTypes.ACTIVE)
                    .ifPresentOrElse(user -> {
                        WorkspaceMember member = new WorkspaceMember();
                        if(!user.getUserNo().equals(reqDto.getSess_user_no())){
                            member.setWorkspaceNo(workspace.getWorkspaceNo());
                            member.setUserNo(user.getUserNo());
                            member.setStatus(UserStatusTypes.PENDING);
                            member.setAuthType(AuthTypes.ONLY_VIEW);
                            memberRepository.save(member);
                        }

                    }, () -> {
                        reqDto.setEmail(email);
                        if(!email.equals(reqDto.getSessUser().getEmail())){
                            signService.requestSignUp(reqDto);
                            User member = userRepository.findByEmail(email).get();
                            WorkspaceMember workspaceMember = new WorkspaceMember();
                            workspaceMember.setUserNo(member.getUserNo());
                            workspaceMember.setWorkspaceNo(workspace.getWorkspaceNo());
                            workspaceMember.setStatus(UserStatusTypes.PENDING);
                            workspaceMember.setAuthType(AuthTypes.ONLY_VIEW);
                            memberRepository.save(workspaceMember);
                        }
                    });
            });

        response.setWs_description(info.getDescription());
        response.setWs_name(info.getWorkspaceName());
        response.setWorkspace_id(workspace.getWorkspaceId());

        return response;
    }

    public ResponseDto updateWorkspace(WorkspaceReqDto reqDto){
        if(!writable(reqDto)) writeError(reqDto, "900-000");
        WorkspaceResDto response = new WorkspaceResDto();

        infoRepository.findByWorkspaceNo(reqDto.getSess_workspace_no())
            .ifPresentOrElse(info -> {
                if(bePresent(reqDto.getWs_name())) info.setWorkspaceName(reqDto.getWs_name());
                if(bePresent(reqDto.getWs_description())) info.setDescription(reqDto.getWs_description());
                infoRepository.save(info);

                response.setWorkspace_id(reqDto.getSess_workspace_id());
                response.setWs_name(info.getWorkspaceName());
                response.setWs_description(info.getDescription());
            }, () -> writeError(reqDto, "900-000"));

        return response;
    }


    public ResponseDto acceptInvitation(WorkspaceReqDto reqDto){
        ResponseDto response = new ResponseDto();
        MyStatusWorkspace statusWorkspace = (MyStatusWorkspace)getItem("ws.workspace.myStatusInWorkspace", reqDto);
        if(statusWorkspace == null) writeError(reqDto, "900-000");
        WorkspaceMember member = map(statusWorkspace, WorkspaceMember.class);
        member.setStatus(UserStatusTypes.ACTIVE);
        memberRepository.save(member);
        return response;
    }

    public ResponseDto declineInvitation(WorkspaceReqDto reqDto){
        ResponseDto response = new ResponseDto();
        MyStatusWorkspace statusWorkspace = (MyStatusWorkspace)getItem("ws.workspace.myStatusInWorkspace", reqDto);
        if(statusWorkspace == null) writeError(reqDto, "900-000");
        reqDto.setSess_workspace_no(statusWorkspace.getWorkspaceNo());
        deleteObject("ws.workspace.deleteMemberWorkspace", reqDto);
        return response;
    }

    private <T extends RequestDto> boolean writable(T requestDto) {
        return requestDto.getWorkspaceAuth().equals(AuthTypes.APROVAL);
    }

}
