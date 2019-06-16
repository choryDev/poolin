package in.pool.server.dto.types;

import in.pool.server.domain.types.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class InSession {

    private Integer userNo;

    private String username;

    private String email;

    private UserStatusTypes status;

    private String salt;

    private LocalDateTime insDt;

    // workspace
    private Integer workspaceNo;

    private String workspaceId;

    private AuthTypes workspaceAuth;

    // project
    private Integer projectNo;

    private String projectId;

    private AuthTypes projectAuthType;

    private BelongTypes projectBelongType;

    private ProjectTypes projectType;

    private ServiceStatusTypes projectStatus;

    public void setStatus(String status) {
        this.status = UserStatusTypes.getStatus(status);
    }

    public void setWorkspaceAuth(String workspaceAuth) {
        this.workspaceAuth = AuthTypes.getAuth(workspaceAuth);
    }

    public void setProjectAuthType(String projectAuthType) {
        this.projectAuthType = AuthTypes.getAuth(projectAuthType);
    }

    public void setProjectBelongType(String projectBelongType) {
        this.projectBelongType = BelongTypes.getBelong(projectBelongType);
    }

    public void setProjectType(String projectType) {
        this.projectType = ProjectTypes.getProjectType(projectType);
    }

    public void setProjectStatus(String projectStatus) {
        this.projectStatus = ServiceStatusTypes.getStatus(projectStatus);
    }
}
