package in.pool.server.domain.workspace;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_CRD_INFO")
@Getter @Setter
public class CardInfo {

    @Id @Column(name = "CRD_NO", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer cardNo;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CRD_NO")
    private Card card;

    @Column(name = "NAME", length = 150)
    private String name;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "PHONE", length = 21)
    private String phone;

    @Column(name = "DESCRIPTION", columnDefinition = "LONGTEXT")
    private String description;

    @Column(name = "IMG_URL")
    private String thumbnailImgUrl;

    @Column(name = "ADDR", columnDefinition = "MEDIUMTEXT")
    private String address;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

}
