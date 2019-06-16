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
    private RequiredTypes nameRequired = RequiredTypes.REQUIRED;

    @Column(name = "EMAIL", columnDefinition = "ENUM")
    @Convert(converter = RequiredTypesConverter.class)
    private RequiredTypes emailRequired = RequiredTypes.REQUIRED;

    @Column(name = "PHONE", columnDefinition = "ENUM")
    @Convert(converter = RequiredTypesConverter.class)
    private RequiredTypes phoneRequired = RequiredTypes.REQUIRED;

    @Column(name = "RESUME", columnDefinition = "ENUM")
    @Convert(converter = RequiredTypesConverter.class)
    private RequiredTypes resumeRequired = RequiredTypes.OPTIONAL;

    @Column(name = "EXPR", columnDefinition = "ENUM")
    @Convert(converter = RequiredTypesConverter.class)
    private RequiredTypes experienceRequired = RequiredTypes.OPTIONAL;

    @Column(name = "WRKS_HIST", columnDefinition = "ENUM")
    @Convert(converter = RequiredTypesConverter.class)
    private RequiredTypes workHistoryRequired = RequiredTypes.OPTIONAL;

    @Column(name = "EDU", columnDefinition = "ENUM")
    @Convert(converter = RequiredTypesConverter.class)
    private RequiredTypes educationRequired = RequiredTypes.OPTIONAL;

    @Column(name = "COVER_L", columnDefinition = "ENUM")
    @Convert(converter = RequiredTypesConverter.class)
    private RequiredTypes coverLetterRequired = RequiredTypes.OPTIONAL;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

    @Column(name = "UPT_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime updatedDate = LocalDateTime.now();

    @Override
    public String toString() {
        return "ProjectRequired{" +
                "projectNo=" + projectNo +
                ", nameRequired=" + nameRequired +
                ", emailRequired=" + emailRequired +
                ", phoneRequired=" + phoneRequired +
                ", resumeRequired=" + resumeRequired +
                ", experienceRequired=" + experienceRequired +
                ", workHistoryRequired=" + workHistoryRequired +
                ", educationRequired=" + educationRequired +
                ", converLetterRequired=" + coverLetterRequired +
                ", insertedDate=" + insertedDate +
                ", updatedDate=" + updatedDate +
                '}';
    }
}
