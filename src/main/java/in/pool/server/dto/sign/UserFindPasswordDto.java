package in.pool.server.dto.sign;

import in.pool.server.domain.types.UserStatusTypes;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserFindPasswordDto {

    private Integer userNo;

    private String username;

    private String email;

    private UserStatusTypes status;

    private String validationCode;

    private boolean availYn;

    public void setStatus(String status) {
        this.status = UserStatusTypes.getStatus(status);
    }
}
