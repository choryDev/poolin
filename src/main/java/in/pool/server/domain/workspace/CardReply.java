package in.pool.server.domain.workspace;

import in.pool.server.domain.user.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_CRD_RPL")
@Getter @Setter
public class CardReply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer id;

    @Column(name = "CRD_NO", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer cardNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CRD_NO")
    private Card card;

    @Column(name = "COMMENT", columnDefinition = "MEDIUMTEXT")
    private String comment;

    @Column(name = "INS_ID", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer insertedId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "INS_ID")
    private User insertedUser;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

}
