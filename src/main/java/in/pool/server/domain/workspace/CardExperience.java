package in.pool.server.domain.workspace;

import in.pool.server.domain.user.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity(name = "SRV_CRD_EXP")
@Getter @Setter
public class CardExperience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer id;

    @Column(name = "CRD_NO", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer cardNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CRD_NO")
    private Card card;

    @Column(name = "TITLE", length = 150)
    private String title;

    @Column(name = "COMPANY", length = 100)
    private String company;

    @Column(name = "SMMRY", columnDefinition = "MEDIUMTEXT")
    private String summary;

    @Column(name = "FROM_DT", columnDefinition = "DATE")
    private LocalDate fromDate;

    @Column(name = "TO_DT", columnDefinition = "DATE")
    private LocalDate toDate;

    @Column(name = "INS_ID", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer insertedId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "INS_ID")
    private User insertedUser;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

}
