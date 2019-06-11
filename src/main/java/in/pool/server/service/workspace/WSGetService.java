package in.pool.server.service.workspace;

import in.pool.server.dto.ResponseDto;
import in.pool.server.dto.ResponseListDto;
import in.pool.server.dto.workspace.WorkspaceReqDto;
import in.pool.server.repositories.workspace.WorkspaceMemberRepository;
import in.pool.server.service.CoreSpace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WSGetService extends CoreSpace {

    public ResponseDto membersInWorkspace(WorkspaceReqDto reqDto){
        ResponseListDto response = new ResponseListDto();
        response.setList((List)getList("ws.workspace.getMembers", reqDto));
        return response;
    }
}
