package in.pool.server.service.user;

import in.pool.server.dto.RequestDto;
import in.pool.server.dto.ResponseDto;
import in.pool.server.dto.ResponseListDto;
import in.pool.server.service.CoreSpace;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService extends CoreSpace {

    public ResponseDto myWorkspaceList(RequestDto requestDto){
        ResponseListDto response = new ResponseListDto();
        response.setList((List)getList("sess.user.myWorkspaceList", requestDto));
        return response;
    }

    public ResponseDto myProjectList(RequestDto requestDto){
        ResponseListDto response = new ResponseListDto();
        response.setList((List)getList("sess.user.myProjectList", requestDto));
        return response;
    }

}
