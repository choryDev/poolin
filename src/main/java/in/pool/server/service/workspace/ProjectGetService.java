package in.pool.server.service.workspace;

import in.pool.server.dto.ResponseDto;
import in.pool.server.dto.workspace.ProjectInfoResDto;
import in.pool.server.dto.workspace.ProjectReqDto;
import in.pool.server.service.CoreSpace;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ProjectGetService extends CoreSpace {

    public ResponseDto getInformation(ProjectReqDto reqDto){
        ProjectInfoResDto responseDto = new ProjectInfoResDto();
        Map general = (Map)getItem("ws.project.generalInformation", reqDto);
        if(bePresent(general)){
            general.put("project_id", reqDto.getSessProject().getProjectId());
            responseDto.setGeneral(general);
        }

        return responseDto;
    }
}
