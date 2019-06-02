package in.pool.server.domain.workspace;

import in.pool.server.domain.user.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_WRKS_MST")
@Getter @Setter
public class Workspace {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "WRKS_NO")
    private Integer workspaceNo;

    @Column(name = "WRKS_ID", length = 21, unique = true)
    private String workspaceId;

    @Column(name = "INS_ID", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer insertedId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "INS_ID")
    private User insertedUser;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

}
