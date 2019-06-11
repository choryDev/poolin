package in.pool.server.service.workspace;

import in.pool.server.dto.ResponseDto;
import in.pool.server.dto.ResponseListDto;
import in.pool.server.dto.workspace.ProjectInfoResDto;
import in.pool.server.dto.workspace.ProjectReqDto;
import in.pool.server.dto.workspace.ProjectRequiredResponse;
import in.pool.server.repositories.workspace.ProjectRequiredRepository;
import in.pool.server.service.CoreSpace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ProjectGetService extends CoreSpace {

    @Autowired
    private ProjectRequiredRepository requiredRepository;

    public ResponseDto getInformation(ProjectReqDto reqDto){
        ProjectInfoResDto responseDto = new ProjectInfoResDto();
        Map general = (Map)getItem("ws.project.generalInformation", reqDto);
        if(bePresent(general)){
            general.put("project_id", reqDto.getSessProject().getProjectId());
            responseDto.setGeneral(general);
        }

        return responseDto;
    }

    public ResponseDto getRequired(ProjectReqDto reqDto){
        ProjectRequiredResponse response = new ProjectRequiredResponse();
        requiredRepository
                .findByProjectNo(reqDto.getSessProject().getProjectNo())
                .ifPresentOrElse(required -> {
                    response.setName_reuqired(required.getNameRequired());
                    response.setEmail_required(required.getEmailRequired());
                    response.setPhone_required(required.getPhoneRequired());
                    response.setResume_required(required.getResumeRequired());
                    response.setWorkHistory_required(required.getWorkHistoryRequired());
                    response.setExperience_required(required.getExperienceRequired());
                    response.setEducation_required(required.getEducationRequired());
                    response.setCoverLetter_required(required.getCoverLetterRequired());
                }, () -> writeError(reqDto, "900-036", HttpStatus.NOT_FOUND));
        return response;
    }

    public ResponseDto getScorecardList(ProjectReqDto reqDto){
        ResponseListDto responseListDto = new ResponseListDto();
        List list = (List)getList("ws.project.scorecardList", reqDto);
        responseListDto.setList(list);
        return responseListDto;
    }
}
