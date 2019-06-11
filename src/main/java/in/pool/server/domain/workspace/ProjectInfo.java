package in.pool.server.domain.workspace;

import in.pool.server.domain.types.BelongTypes;
import in.pool.server.domain.types.RemoteTypes;
import in.pool.server.domain.types.convertors.BelongTypeConverter;
import in.pool.server.domain.types.convertors.RemoteTypesConverter;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "SRV_PRJT_INFO")
@Getter @Setter
public class ProjectInfo {

    @Id @Column(name = "PRJT_NO", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer projectNo;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PRJT_NO")
    private Project project;

    @Column(name = "PRJT_NM", length = 150)
    private String projectName;

    @Column(name = "DEPT_NM", length = 150)
    private String projectDepartment;

    @Column(name = "INTERNAL_ID", length = 100)
    private String internalId;

    @Column(name = "CITY")
    private String city;

    @Column(name = "LOCATION", length = 100)
    private String location;

    @Column(name = "REMOTE", columnDefinition = "ENUM")
    @Convert(converter = RemoteTypesConverter.class)
    private RemoteTypes remote;

    // COM_PRJT_MST::401
    @Column(name = "position", length = 11)
    private String position;

    // COM_PRJT_MST::402
    @Column(name = "category", length = 11)
    private String category;

    // COM_PRJT_MST::403
    @Column(name = "edu", length = 11)
    private String education;

    // COM_PRJT_MST::404
    @Column(name = "exp", length = 11)
    private String experience;

    @Column(name = "description", columnDefinition = "LONGTEXT")
    private String description;

}
