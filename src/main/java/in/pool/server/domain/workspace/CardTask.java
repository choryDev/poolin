package in.pool.server.domain.workspace;

import in.pool.server.domain.user.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity(name = "SRV_CRD_TASK")
@Getter @Setter
public class CardTask {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer id;

    @Column(name = "CRD_NO", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer cardNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CRD_NO")
    private Card card;

    @Column(name = "TITLE", columnDefinition = "MEDIUMTEXT")
    private String title;

    @Column(name = "DUE_DT", columnDefinition = "DATE")
    private LocalDate dueDate;

    @Column(name = "TIMEZONE", length = 11)
    private String timezone;

    @Column(name = "TIME", columnDefinition = "TIME")
    private LocalTime time;

    @Column(name = "DURATION")
    private Integer duration;

    @Column(name = "DESCRIPTION", columnDefinition = "MEDIUMTEXT")
    private String description;

    @Column(name = "LOCATION")
    private String location;

    @Column(name = "INS_ID", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer insertedId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "INS_ID")
    private User insertedUser;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

}
