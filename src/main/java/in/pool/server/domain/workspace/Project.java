package in.pool.server.domain.workspace;

import in.pool.server.domain.types.BelongTypes;
import in.pool.server.domain.types.ProjectTypes;
import in.pool.server.domain.types.ServiceStatusTypes;
import in.pool.server.domain.types.convertors.BelongTypeConverter;
import in.pool.server.domain.types.convertors.ProjectTypesConverter;
import in.pool.server.domain.types.convertors.ServiceStatusTypeConverter;
import in.pool.server.domain.user.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_PRJT_MST")
@Getter @Setter
public class Project {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PRJT_NO", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer projectNo;

    @Column(name = "WRKS_NO", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer workspaceNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "WRKS_NO")
    private Workspace workspace;

    @Column(name = "PRJT_ID", length = 21, unique = true)
    private String projectId;

    @Column(name = "PRJT_STAT", length = 11, columnDefinition = "ENUM")
    @Convert(converter = ServiceStatusTypeConverter.class)
    private ServiceStatusTypes projectStatus;

    @Column(name = "BELONG_TP", columnDefinition = "ENUM")
    @Convert(converter = BelongTypeConverter.class)
    private BelongTypes projectBelongType;

    @Column(name = "PRJT_TP", columnDefinition = "ENUM")
    @Convert(converter = ProjectTypesConverter.class)
    private ProjectTypes projectType;

    @Column(name = "INS_ID", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer insertedId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "INS_ID")
    private User insertedUser;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

    public void setProjectNo(Integer projectNo) {
        this.projectNo = projectNo;
    }

    public void setWorkspaceNo(Integer workspaceNo) {
        this.workspaceNo = workspaceNo;
    }

    public void setWorkspace(Workspace workspace) {
        this.workspace = workspace;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    public void setProjectStatus(ServiceStatusTypes projectStatus) {
        this.projectStatus = projectStatus;
    }

    public void setProjectBelongType(BelongTypes projectBelongType) {
        this.projectBelongType = projectBelongType;
    }

    public void setInsertedId(Integer insertedId) {
        this.insertedId = insertedId;
    }

    public void setInsertedUser(User insertedUser) {
        this.insertedUser = insertedUser;
    }

    public void setInsertedDate(LocalDateTime insertedDate) {
        this.insertedDate = insertedDate;
    }

    public void setProjectType(String projectType) {
        this.projectType = ProjectTypes.getProjectType(projectType);
    }

    public void setProjectType(ProjectTypes projectType) {
        this.projectType = projectType;
    }

}
