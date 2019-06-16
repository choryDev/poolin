package in.pool.server.domain.workspace;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_WRKS_INFO")
@Getter @Setter
public class WorkspaceInfo {

    @Id
    @Column(name = "WRKS_NO", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer workspaceNo;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "WRKS_NO")
    private Workspace workspace;

    @Column(name = "WRKS_NM", length = 50)
    private String workspaceName;

    @Column(name = "DESCRIPTION", columnDefinition = "MEDIUMTEXT")
    private String description;

    @Column(name = "UPT_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime updatedDate = LocalDateTime.now();

}
