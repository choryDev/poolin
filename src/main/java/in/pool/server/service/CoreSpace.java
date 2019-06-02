package in.pool.server.service;

import com.google.gson.Gson;
import in.pool.server.config.SqlMaster;
import in.pool.server.domain.types.SessionLayerTypes;
import in.pool.server.domain.user.User;
import in.pool.server.domain.workspace.Project;
import in.pool.server.domain.workspace.Workspace;
import in.pool.server.dto.RequestDto;
import in.pool.server.dto.error.BusinessLogicalException;
import in.pool.server.dto.types.InSession;
import in.pool.server.repositories.system.LanguageRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

@Component
public class CoreSpace {

    private final static Gson gson = new Gson();

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    LanguageRepository languageRepository;

    @Autowired
    private SqlMaster sm;

    protected Object insertObject(String path, Object param){
        try{
            return this.sm.insert(path, param);
        }catch (Exception e){
            throw getErrString(e);
        }
    }

    protected Object updateObject(String path, Object param){
        try{
            return this.sm.update(path, param);
        }catch (Exception e){
            throw getErrString(e);
        }
    }

    protected Object deleteObject(String path, Object param){
        try{
            return this.sm.delete(path, param);
        }catch (Exception e){
            throw getErrString(e);
        }
    }

    protected Object getItem(String path, Object param){
        try{
            return this.sm.selectOne(path, param);
        }catch (Exception e){
            e.printStackTrace();
            throw getErrString(e);
        }
    }

    protected Object getList(String path, Object param){
        try{
            return this.sm.selectList(path, param);
        }catch (Exception e){
            e.printStackTrace();
            throw getErrString(e);
        }
    }

    protected Object procedureObject(String path, Object param){
        try{
            return this.sm.selectOne(path, param);
        }catch (Exception e){
            throw getErrString(e);
        }
    }

    private BusinessLogicalException getErrString(String json) {
        throw new BusinessLogicalException(json);
    }

    private BusinessLogicalException getErrString(Exception e){
        e.printStackTrace();
        Map rtn = new HashMap();
        rtn.put("result", "n");
        return getErrString(getJson(rtn));
    }

    protected String getJson(Object o){
        try{
            return gson.toJson(o);
        }catch (Exception e){
            throw new BusinessLogicalException("SystemError::getJson() error");
        }
    }

    protected <T, K> T map(K o, Class<T> cls){
        return modelMapper.map(o, cls);
    }

    public void writeError(RequestDto requesetDto, String lang_code){
        writeError(requesetDto, lang_code, HttpStatus.BAD_GATEWAY);
    }

    public void writeError(RequestDto requesetDto, String err_code, HttpStatus httpStatus){
        throw new BusinessLogicalException(getMessage(requesetDto, err_code), httpStatus, err_code);
    }

    protected <T extends RequestDto> String getMessage(T map, String lang_code){
        map.setErr_code(lang_code);
        return (String)getItem("comm.comm.getMessage", map);
    }

    protected <T> boolean bePresent(T obj){
        if(obj instanceof String) return obj != null && !"".equals(obj);
        if(obj instanceof Long) return obj != null;
        if(obj instanceof Integer) return obj != null;
        return obj != null;
    }

    protected  <K extends RequestDto> void chkSession(K requesetDto){
        SessionLayerTypes layer = requesetDto.getSess_layer();
        InSession sess = new InSession();
        if(SessionLayerTypes.WORKSPACE.equals(layer)){
            sess = (InSession)getItem("sess.session.checkSessionByWorkspace", requesetDto);

            if(sess == null) writeError(requesetDto, "900-000", HttpStatus.BAD_GATEWAY);

            requesetDto.setSessWorkspace(map(sess, Workspace.class));
            requesetDto.setSess_workspace_no(sess.getWorkspaceNo());
            requesetDto.setWorkspaceAuth(sess.getWorkspaceAuth());
        }else if(SessionLayerTypes.PROJECT.equals(layer) || SessionLayerTypes.CARD.equals(layer)){
            sess = (InSession)getItem("sess.session.checkSessionByProject", requesetDto);

            if(sess == null) writeError(requesetDto, "900-000", HttpStatus.BAD_GATEWAY);

            requesetDto.setSessWorkspace(map(sess, Workspace.class));
            requesetDto.setSess_workspace_no(sess.getWorkspaceNo());
            requesetDto.setWorkspaceAuth(sess.getWorkspaceAuth());

            requesetDto.setSessProject(map(sess, Project.class));
            requesetDto.setSess_project_id(sess.getProjectId());
            requesetDto.setSess_project_no(sess.getProjectNo());
            requesetDto.setProjectAuth(sess.getProjectAuthType());

        }else if(SessionLayerTypes.ME.equals(layer)){
            sess = (InSession)getItem("sess.session.checkSessionByMe", requesetDto);
        }

        if(sess == null) writeError(requesetDto, "900-000", HttpStatus.BAD_GATEWAY);

        requesetDto.setSessUser(map(sess, User.class));
        requesetDto.setSess_user_no(sess.getUserNo());
        try {
            String sessAuthKey = requesetDto.getSess_auth_key();
            Jws<Claims> claims = Jwts.parser()
                .setSigningKey(sess.getSalt().getBytes("UTF-8"))
                .parseClaimsJws(sessAuthKey);

            if(!requesetDto.getSessUser().getUsername().equals(claims.getBody().get("__username__")))
                throw new RuntimeException();
        } catch (UnsupportedEncodingException e) {
            writeError(requesetDto, "900-000", HttpStatus.BAD_GATEWAY);
        } catch (Throwable throwable) {
            writeError(requesetDto, "900-000", HttpStatus.BAD_GATEWAY);
        }
    }

    private <T extends RequestDto> void setAuth(T requestDto, String auth){
//        if(ReadWriteType.READ.getAuth().equals(auth)){
//            requestDto.setReadWriteType(ReadWriteType.READ);
//        }else if(ReadWriteType.WRITE.getAuth().equals(auth)){
//            requestDto.setReadWriteType(ReadWriteType.WRITE);
//        }else writeError(requestDto, "900-000");
    }

    protected void endingLog(StringBuffer sb, String className, StopWatch stopWatch, long startMemory){
        long endMemory = (Runtime.getRuntime().freeMemory() / 1024) / (Runtime.getRuntime().totalMemory() / 1024);
        stopWatch.stop();
        sb.append(" [ " + className + " ] Used Time : " + (stopWatch.getTotalTimeSeconds() + "/Sec\n"));
        sb.append(" [ " + className + " ] Used Memory : " + (endMemory - startMemory) + "/K\n");
    }


    protected void errorEndingLog(StringBuffer sb, Exception e, Logger log){
        sb.append(" [ error ] " + e.getMessage() + "\n");
        sb.append("## API Request Failed ##");
        log.error(sb.toString());
    }
}
