package in.pool.server.domain.workspace;

import in.pool.server.domain.types.ServiceStatusTypes;
import in.pool.server.domain.types.convertors.ServiceStatusTypeConverter;
import in.pool.server.domain.user.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_PRJT_PPL")
@Getter @Setter
public class ProjectPipline {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PPL_NO", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer piplineNo;

    @Column(name = "PRJT_NO", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer projectNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PRJT_NO")
    private Project project;

    @Column(name = "PPL_STAT", length = 11, columnDefinition = "ENUM")
    @Convert(converter = ServiceStatusTypeConverter.class)
    private ServiceStatusTypes pipelineStatus;

    @Column(name = "PPL_NM", length = 100)
    private String pipelineName;

    @Column(name = "DESCRIPTION", columnDefinition = "MEDIUMTEXT")
    private String description;

    @Column(name = "INS_ID", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer insertedId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "INS_ID")
    private User insertedUser;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();
}