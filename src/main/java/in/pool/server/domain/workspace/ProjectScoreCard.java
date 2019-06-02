package in.pool.server.domain.workspace;

import in.pool.server.domain.user.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_PRJT_SCRD")
@Getter @Setter
public class ProjectScoreCard {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer id;

    @Column(name = "UP_ID", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer upId;

    @Column(name = "PRJT_NO", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer projectNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PRJT_NO")
    private Project project;

    @Column(name = "content")
    private String content;

    @Column(name = "LEV", length = 11)
    private Integer level;

    @Column(name = "ORD", length = 11)
    private Integer ordNo;

    @Column(name = "INS_ID", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer insertedId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "INS_ID")
    private User insertedUser;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

    @Column(name = "UPT_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime updatedDate = LocalDateTime.now();

}
