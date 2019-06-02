package in.pool.server.domain.types;


import in.pool.server.domain.types.convertors.UserSessionTypeConverter;

import javax.persistence.Column;
import javax.persistence.Convert;
import java.io.Serializable;

public class UserSessionPK implements Serializable {

    @Column(name = "USER_NO")
    private Integer userNo;

    @Column(name = "SESS_TP", columnDefinition = "ENUM")
    @Convert(converter = UserSessionTypeConverter.class)
    private UserSessionTypes sessionType;

}
