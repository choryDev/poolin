package in.pool.server.domain.user;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_USR_INFO")
@Getter
@Setter
public class UserInfo {

    @Id @Column(name = "USER_NO", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer userNo;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_NO")
    private User user;

    @Column(name = "NAME", length = 11)
    private String name;

    @Column(name = "INTRO", columnDefinition = "MEDIUMTEXT")
    private String intro;

    @Column(name = "PIC_URL")
    private String picUrl;

    @Column(name = "COLOR", length = 21)
    private String color;

    @Column(name = "UPT_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime updatedDate = LocalDateTime.now();

}
