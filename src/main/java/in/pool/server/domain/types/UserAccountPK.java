package in.pool.server.domain.types;


import in.pool.server.domain.types.convertors.UserAccountTypeConverter;

import javax.persistence.Column;
import javax.persistence.Convert;
import java.io.Serializable;

public class UserAccountPK implements Serializable {

    @Column(name = "USER_NO")
    private Integer userNo;

    @Column(name = "ACC_TP")
    @Convert(converter = UserAccountTypeConverter.class)
    private UserAccountTypes accountType;

}
