package in.pool.server.service.workspace;

import in.pool.server.dto.RequestDto;
import in.pool.server.dto.ResponseDto;
import in.pool.server.dto.ResponseListDto;
import in.pool.server.service.CoreSpace;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WSGetService extends CoreSpace {

    public ResponseDto getListWorkspace(RequestDto requestDto){
        ResponseListDto response = new ResponseListDto();
        response.setList((List)getList("ws.workspace.getListOfWorkspace", requestDto));
        return response;
    }
}
