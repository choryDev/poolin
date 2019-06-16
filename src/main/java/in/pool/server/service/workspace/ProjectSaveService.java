package in.pool.server.service.workspace;

import in.pool.server.domain.types.*;
import in.pool.server.domain.workspace.Project;
import in.pool.server.domain.workspace.ProjectInfo;
import in.pool.server.domain.workspace.ProjectMember;
import in.pool.server.dto.ResponseDto;
import in.pool.server.dto.workspace.ProjectReqDto;
import in.pool.server.dto.workspace.ProjectResDto;
import in.pool.server.repositories.user.UserRepository;
import in.pool.server.repositories.workspace.ProjectInfoRepository;
import in.pool.server.repositories.workspace.ProjectMemberRepository;
import in.pool.server.repositories.workspace.ProjectRepository;
import in.pool.server.service.CoreSpace;
import in.pool.server.utils.AutoKey;
import org.springframework.beans.factory.annotation.Autowired;
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

//        reqDto.getUsers()
//            .stream()
//            .filter(email -> !email.equals(reqDto.getSessUser().getEmail()))
//            .forEach(email -> {
//                userRepository
//                    .findByEmailAndStatus(email, UserStatusTypes.ACTIVE)
//                    .stream().forEach(user -> {
//                    ProjectMember projectMember = new ProjectMember();
//                    if(!user.getUserNo().equals(reqDto.getSess_user_no())){
//                        projectMember.setProjectNo(project.getProjectNo());
//                        projectMember.setProject(project);
//                        projectMember.setUserNo(user.getUserNo());
//                        projectMember.setStatus(UserStatusTypes.PENDING);
//                        projectMember.setAuthType(AuthTypes.ONLY_VIEW);
//                        projectMemberRepository.save(projectMember);
//                    }
//                });
//            });
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
}
