package in.pool.server.dto.sign;

import in.pool.server.domain.types.UserStatusTypes;
import in.pool.server.domain.types.YesNoTypes;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserKeyDto {

    private Integer userNo;

    private String username;

    private String email;

    private UserStatusTypes status;

    private LocalDateTime insertedDate;

    private LocalDateTime updatedDate;

    private YesNoTypes validationStatus;

    private Boolean availYn;

    public void setStatus(String status) {
        this.status = UserStatusTypes.getStatus(status);
    }

    public void setValidationStatus(String validationStatus) {
        this.validationStatus = YesNoTypes.getYesNo(validationStatus);
    }
}
