package in.pool.server.domain.user;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_USR_PWD")
@Getter
@Setter
public class UserPassword {

    @Id
    @Column(name = "USER_NO", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer userNo;

    @MapsId
    @OneToOne
    @JoinColumn(name = "USER_NO")
    private User user;

    @Column(name = "PWD", length = 256)
    private String password;

    @Column(name = "SALT", length = 256)
    private String salt;

    @Column(name = "BAK_PWD", length = 256)
    private String bakPassword;

    @Column(name = "UPT_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime updatedDate = LocalDateTime.now();
}
