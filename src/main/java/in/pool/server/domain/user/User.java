package in.pool.server.domain.user;

import in.pool.server.domain.types.UserStatusTypes;
import in.pool.server.domain.types.convertors.UserStatusTypeConverter;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SRV_USR_MST")
@Getter
@Setter
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_NO", length = 11, columnDefinition = "UNSIGNED INT(11)")
    private Integer userNo;

    @Column(name = "USERNAME", length = 15, unique = true)
    private String username;

    @Column(name = "EMAIL", unique = true)
    private String email;

    @Column(name = "STATUS", length = 11, columnDefinition = "VARCHAR(11)")
    @Convert(converter = UserStatusTypeConverter.class)
    private UserStatusTypes status = UserStatusTypes.PENDING;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

    @Column(name = "UPT_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime updatedDate = LocalDateTime.now();

    // Mapping
    @OneToOne(mappedBy = "user", fetch = FetchType.LAZY, optional = false)
    public UserPassword password;

}

