package in.pool.server.domain.user;

import in.pool.server.domain.types.UserSessionPK;
import in.pool.server.domain.types.UserSessionTypes;
import in.pool.server.domain.types.convertors.UserSessionTypeConverter;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_USR_SESS")
@IdClass(UserSessionPK.class)
@Getter
@Setter
public class UserSession {

    @Id @Column(name = "USER_NO", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer userNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_NO", insertable = false, updatable = false)
    private User user;

    @Id @Column(name = "SESS_TP", columnDefinition = "ENUM")
    @Convert(converter = UserSessionTypeConverter.class)
    private UserSessionTypes sessionType;

    @Column(name = "SALT")
    private String salt;

    @Column(name = "SESS_KEY")
    private String sessKey;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

}
