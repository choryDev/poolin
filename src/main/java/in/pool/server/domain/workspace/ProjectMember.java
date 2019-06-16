package in.pool.server.domain.workspace;

import in.pool.server.domain.types.AuthTypes;
import in.pool.server.domain.types.ProjectMemberPK;
import in.pool.server.domain.types.UserStatusTypes;
import in.pool.server.domain.types.convertors.AuthTypesConverter;
import in.pool.server.domain.types.convertors.UserStatusTypeConverter;
import in.pool.server.domain.user.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_PRJT_MEM")
@IdClass(ProjectMemberPK.class)
@Getter @Setter
public class ProjectMember {

    @Id @Column(name = "PRJT_NO", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer projectNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PRJT_NO", insertable = false, updatable = false)
    private Project project;

    @Id @Column(name = "USER_NO", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer userNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_NO", insertable = false, updatable = false)
    private User user;

    @Column(name = "AUTH_TP", columnDefinition = "ENUM")
    @Convert(converter = AuthTypesConverter.class)
    private AuthTypes authType;

    @Column(name = "STATUS", length = 11, columnDefinition = "ENUM")
    @Convert(converter = UserStatusTypeConverter.class)
    private UserStatusTypes status;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

}