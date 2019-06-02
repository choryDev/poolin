package in.pool.server.domain.user;

import in.pool.server.domain.types.UserAccountPK;
import in.pool.server.domain.types.UserAccountTypes;
import in.pool.server.domain.types.convertors.UserAccountTypeConverter;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_USR_ACC")
@IdClass(UserAccountPK.class)
@Getter
@Setter
public class UserAccount {

    @Id
    @Column(name = "USER_NO", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer userNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_NO", insertable = false, updatable = false)
    private User user;

    @Id @Column(name = "ACC_TP", columnDefinition = "VARCHAR(11)")
    @Convert(converter = UserAccountTypeConverter.class)
    private UserAccountTypes accountType;

    @Column(name = "THIRDP_ID")
    private String thirdpartyId;

    @Column(name = "REF_KEY1")
    private String refKey1;

    @Column(name = "REF_KEY2")
    private String refKey2;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

    @Column(name = "UPT_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime updatedDate = LocalDateTime.now();

}
