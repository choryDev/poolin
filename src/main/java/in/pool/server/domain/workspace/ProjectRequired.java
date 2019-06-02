package in.pool.server.domain.workspace;

import in.pool.server.domain.types.RequiredTypes;
import in.pool.server.domain.types.convertors.RequiredTypesConverter;
import in.pool.server.domain.workspace.Project;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_PRJT_REQ")
@Getter @Setter
public class ProjectRequired {

    @Id
    @Column(name = "PRJT_NO", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer projectNo;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PRJT_NO")
    private Project project;

    @Column(name = "NAME", columnDefinition = "ENUM")
    @Convert(converter = RequiredTypesConverter.class)
    private RequiredTypes nameRequired;

    @Column(name = "EMAIL", columnDefinition = "ENUM")
    @Convert(converter = RequiredTypesConverter.class)
    private RequiredTypes emailRequired;

    @Column(name = "PHONE", columnDefinition = "ENUM")
    @Convert(converter = RequiredTypesConverter.class)
    private RequiredTypes phoneRequired;

    @Column(name = "RESUME", columnDefinition = "ENUM")
    @Convert(converter = RequiredTypesConverter.class)
    private RequiredTypes resumeRequired;

    @Column(name = "EXPR", columnDefinition = "ENUM")
    @Convert(converter = RequiredTypesConverter.class)
    private RequiredTypes experienceRequired;

    @Column(name = "WRKS_HIST", columnDefinition = "ENUM")
    @Convert(converter = RequiredTypesConverter.class)
    private RequiredTypes workHistoryRequired;

    @Column(name = "EDU", columnDefinition = "ENUM")
    @Convert(converter = RequiredTypesConverter.class)
    private RequiredTypes educationRequired;

    @Column(name = "COVER_L", columnDefinition = "ENUM")
    @Convert(converter = RequiredTypesConverter.class)
    private RequiredTypes converLetterRequired;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

    @Column(name = "UPT_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime updatedDate = LocalDateTime.now();
}
