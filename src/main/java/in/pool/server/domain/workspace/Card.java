package in.pool.server.domain.workspace;

import in.pool.server.domain.types.ServiceStatusTypes;
import in.pool.server.domain.types.convertors.ServiceStatusTypeConverter;
import in.pool.server.domain.user.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_CRD_MST")
@Getter @Setter
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CRD_NO", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer cardNo;

    @Column(name = "PPL_NO", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer piplineNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PPL_NO")
    private ProjectPipline pipeline;

    @Column(name = "CRD_STAT", length = 11, columnDefinition = "ENUM")
    @Convert(converter = ServiceStatusTypeConverter.class)
    private ServiceStatusTypes cardStatus;

    @Column(name = "INS_ID", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer insertedId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "INS_ID")
    private User insertedUser;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

}
