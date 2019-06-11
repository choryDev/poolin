package in.pool.server.service.workspace;

import in.pool.server.domain.types.*;
import in.pool.server.domain.workspace.*;
import in.pool.server.dto.ResponseDto;
import in.pool.server.dto.workspace.ProjectReqDto;
import in.pool.server.dto.workspace.ProjectRequiredResponse;
import in.pool.server.dto.workspace.ProjectResDto;
import in.pool.server.dto.workspace.ProjectScorecardResponse;
import in.pool.server.repositories.user.UserRepository;
import in.pool.server.repositories.workspace.*;
import in.pool.server.service.CoreSpace;
import in.pool.server.utils.AutoKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.*;

@Service
@Transactional(rollbackFor = {
    Exception.class, Throwable.class
})
public class ProjectSaveService extends CoreSpace {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ProjectInfoRepository infoRepository;

    @Autowired
    private ProjectMemberRepository projectMemberRepository;

    @Autowired
    private ProjectRequiredRepository requiredRepository;

    @Autowired
    private ProjectPipelineRepository pipelineRepository;

    @Autowired
    private ProjectScorecardRepository scorecardRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AutoKey autoKey;

    public ResponseDto newProject(ProjectReqDto reqDto){
        ProjectResDto response = new ProjectResDto();
        /*
        1. Project Master 생성
        2. 요청자를 Project member로 등록
        3. 추가 사용자들 Invite.
         */
        // validation: name
        // todo: language 추가하기
        if(!bePresent(reqDto.getProject_name())) writeError(reqDto, "900-035");
        Map keyMap = new HashMap();
        keyMap.put("autono_tp", "project");

        Project project = new Project();
        project.setWorkspaceNo(reqDto.getSess_workspace_no());
        project.setWorkspace(reqDto.getSessWorkspace());
        project.setProjectId(autoKey.makeGetKey(keyMap));
        project.setInsertedUser(reqDto.getSessUser());
        project.setInsertedId(reqDto.getSess_user_no());
        project.setProjectType(reqDto.getProject_type());
        project.setProjectStatus(ServiceStatusTypes.ACTIVE);
        project.setProjectBelongType(BelongTypes.PUBLIC);
        projectRepository.save(project);

        ProjectInfo projectInfo = new ProjectInfo();
        projectInfo.setProject(project);
        projectInfo.setProjectNo(project.getProjectNo());
        projectInfo.setProjectName(reqDto.getProject_name());
        projectInfo.setDescription(reqDto.getProject_description());
        projectInfo.setRemote(RemoteTypes.REMOTE);
        infoRepository.save(projectInfo);

        ProjectMember member = new ProjectMember();
        member.setAuthType(AuthTypes.APROVAL);
        member.setProjectNo(project.getProjectNo());
        member.setProject(project);
        member.setStatus(UserStatusTypes.ACTIVE);
        member.setUser(reqDto.getSessUser());
        member.setUserNo(reqDto.getSess_user_no());
        projectMemberRepository.save(member);

        ProjectRequired required = new ProjectRequired();
        required.setProject(project);
        required.setProjectNo(project.getProjectNo());
        requiredRepository.save(required);
        ((List<String>)getList("ws.project.defaultPipeline", reqDto))
                .stream()
                .forEach(pipe -> {
                    ProjectPipline pipeline = new ProjectPipline();
                    pipeline.setProject(project);
                    pipeline.setProjectNo(project.getProjectNo());
                    pipeline.setPipelineName(pipe);
                    pipeline.setPipelineStatus(ServiceStatusTypes.ACTIVE);
                    pipeline.setInsertedId(reqDto.getSess_user_no());
                    pipeline.setInsertedUser(reqDto.getSessUser());
                    pipelineRepository.save(pipeline);
                });

        response.setProject_description(projectInfo.getDescription());
        response.setProject_name(projectInfo.getProjectName());
        response.setProject_id(project.getProjectId());
        return response;
    }

    /**
     * name, department, internal_id, location, city
     * @param reqDto
     * @return
     */
    public ResponseDto updateProject(ProjectReqDto reqDto){
        ProjectResDto response = new ProjectResDto();
        infoRepository
            .findByProjectNo(reqDto.getSessProject().getProjectNo())
            .stream()
            .forEach(info -> {
                if(bePresent(reqDto.getProject_name())) info.setProjectName(reqDto.getProject_name());
                if(bePresent(reqDto.getProject_description())) info.setDescription(reqDto.getProject_description());
                if(bePresent(reqDto.getProject_department())) info.setProjectDepartment(reqDto.getProject_department());
                if(bePresent(reqDto.getProject_internal_id())) info.setInternalId(reqDto.getProject_internal_id());
                if(bePresent(reqDto.getCity())) info.setCity(reqDto.getCity());
                if(bePresent(reqDto.getLocation())) info.setLocation(reqDto.getLocation());
                if(bePresent(reqDto.getPosition_type())) info.setPosition(reqDto.getPosition_type());
                if(bePresent(reqDto.getCategory())) info.setCategory(reqDto.getCategory());
                if(bePresent(reqDto.getEducation())) info.setEducation(reqDto.getEducation());
                if(bePresent(reqDto.getExperience())) info.setExperience(reqDto.getExperience());

                response.setProject_id(reqDto.getSessProject().getProjectId());
                response.setProject_description(info.getDescription());
                response.setProject_name(info.getProjectName());
                response.setCategory(info.getCategory());
                response.setProject_department(info.getProjectDepartment());
                response.setCity(info.getCity());
                response.setEducation(info.getEducation());
                response.setExperience(info.getExperience());
                response.setLocation(info.getLocation());
                response.setPosition_type(info.getPosition());
                response.setCategory(info.getCategory());
                response.setExperience(info.getExperience());
                response.setEducation(info.getEducation());
                response.setProject_internal_id(info.getInternalId());

                /* todo: History */

            });

        return response;
    }

    public ResponseDto updateRequired(ProjectReqDto reqDto){
        ProjectRequiredResponse response = new ProjectRequiredResponse();
        requiredRepository
                .findByProjectNo(reqDto.getSessProject().getProjectNo())
                .ifPresentOrElse(required -> {
                    System.out.println(required.toString());
                    if (bePresent(reqDto.getName_reuqired())) required.setNameRequired(reqDto.getName_reuqired());
                    if (bePresent(reqDto.getEmail_required())) required.setEmailRequired(reqDto.getEmail_required());
                    if (bePresent(reqDto.getPhone_required())) required.setPhoneRequired(reqDto.getPhone_required());
                    if (bePresent(reqDto.getResume_required())) required.setResumeRequired(reqDto.getResume_required());
                    if (bePresent(reqDto.getExperience_required())) required.setExperienceRequired(reqDto.getExperience_required());
                    if (bePresent(reqDto.getWorkHistory_required())) required.setWorkHistoryRequired(reqDto.getWorkHistory_required());
                    if (bePresent(reqDto.getEducation_required())) required.setEducationRequired(reqDto.getEducation_required());
                    if (bePresent(reqDto.getCoverLetter_required())) required.setCoverLetterRequired(reqDto.getCoverLetter_required());
                    requiredRepository.save(required);

                    response.setName_reuqired(required.getNameRequired());
                    response.setEmail_required(required.getEmailRequired());
                    response.setPhone_required(required.getPhoneRequired());
                    response.setResume_required(required.getResumeRequired());
                    response.setExperience_required(required.getExperienceRequired());
                    response.setWorkHistory_required(required.getWorkHistoryRequired());
                    response.setEducation_required(required.getEducationRequired());
                    response.setCoverLetter_required(required.getCoverLetterRequired());

                }, () -> writeError(reqDto, "900-036", HttpStatus.NOT_FOUND));
        return response;
    }

    public ResponseDto updateScorecard(ProjectReqDto reqDto){
        ProjectScorecardResponse response = new ProjectScorecardResponse();
        scorecardRepository
                .findByScorecardNoAndProjectNo(reqDto.getScorecard_no(), reqDto.getSessProject().getProjectNo())
                .ifPresentOrElse(scorecard -> {
                    // 수정
                    if(bePresent(reqDto.getContent())) scorecard.setContent(reqDto.getContent());

                    scorecardRepository.save(scorecard);
                    response.setScorecard_no(scorecard.getScorecardNo());
                    response.setUp_scorecard_no(scorecard.getUpId());
                    response.setContent(scorecard.getContent());
                }, () -> {
                    // 신규등록
                    ProjectScoreCard scoreCard = new ProjectScoreCard();
                    scoreCard.setProject(reqDto.getSessProject());
                    if(bePresent(reqDto.getUp_scorecard_no())) {
                        scorecardRepository
                                .findByScorecardNoAndUpId(reqDto.getUp_scorecard_no(), null)
                                .ifPresentOrElse(sc -> {
                                    // 정상적인 up_scorecard_no
                                    scoreCard.setLevel(2);
                                    scoreCard.setUpId(reqDto.getUp_scorecard_no());
                                }, () -> scoreCard.setLevel(1));
                    }
                    scoreCard.setContent(reqDto.getContent());
                    scoreCard.setInsertedUser(reqDto.getSessUser());
                    scorecardRepository.save(scoreCard);

                    response.setScorecard_no(scoreCard.getScorecardNo());
                    response.setUp_scorecard_no(scoreCard.getUpId());
                    response.setContent(scoreCard.getContent());
                });
        return response;
    }

    public ResponseDto addNewMember(ProjectReqDto reqDto){
        ResponseDto response = new ResponseDto();
        reqDto.getUsers()
            .stream()
            .filter(email -> !email.equals(reqDto.getSessUser().getEmail()))
            .forEach(email -> {
                Map param = new HashMap();
                param.put("email", email);
                param.put("sess_workspace_no", reqDto.getSess_workspace_no());
                param.put("sess_project_no", reqDto.getSess_project_no());
                Integer userNo = (Integer)getItem("ws.workspace.chkEmployeeByEmail", param);
                if(bePresent(userNo)){
                    // 등록가능한 사용자.
                    ProjectMember member = new ProjectMember();
                    member.setAuthType(AuthTypes.APROVAL);
                    member.setProject(reqDto.getSessProject());
                    member.setProjectNo(reqDto.getSessProject().getProjectNo());
                    member.setUserNo(userNo);
                    member.setStatus(UserStatusTypes.ACTIVE);
                    projectMemberRepository.save(member);
                }
            });
        return response;
    }

    public ResponseDto deleteMember(ProjectReqDto reqDto){
        ResponseDto response = new ResponseDto();
        userRepository
                .findByUsernameAndStatus(reqDto.getUsername(), UserStatusTypes.ACTIVE)
                .stream()
                .forEach(user -> {
                    projectMemberRepository.deleteByProjectNoAndUserNo(reqDto.getSess_project_no(), user.getUserNo());
                });
        return response;
    }
}