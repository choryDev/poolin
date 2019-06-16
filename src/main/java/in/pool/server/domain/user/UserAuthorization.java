package in.pool.server.domain.user;

import in.pool.server.domain.types.YesNoTypes;
import in.pool.server.domain.types.convertors.YesNoTypeConverter;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_USR_AUTH")
@Getter
@Setter
public class UserAuthorization {

    @Id
    @Column(name = "USER_NO", length = 11, columnDefinition = "UNSIGNED INT(11)", insertable = false, updatable = false)
    private Integer userNo;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_NO")
    private User user;

    @Column(name = "MRK_AGR", columnDefinition = "ENUM('Y', 'N') DEFAULT N")
    @Convert(converter = YesNoTypeConverter.class)
    private YesNoTypes marketingAgree = YesNoTypes.NO;

    @Column(name = "PLCY_AGR", columnDefinition = "ENUM('Y', 'N') DEFAULT N")
    @Convert(converter = YesNoTypeConverter.class)
    private YesNoTypes policyAgree = YesNoTypes.NO;

    @Column(name = "VALID_CD", length = 64)
    private String validationCode;

    @Column(name = "VALID_DT", columnDefinition="DATETIME")
    private LocalDateTime validationDate;

    @Column(name = "VALID_STAT", columnDefinition = "ENUM('Y', 'N') DEFAULT N")
    @Convert(converter = YesNoTypeConverter.class)
    private YesNoTypes validationStatus = YesNoTypes.NO;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

    @Column(name = "UPT_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime updatedDate = LocalDateTime.now();

}
