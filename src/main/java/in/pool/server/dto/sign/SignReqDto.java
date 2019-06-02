package in.pool.server.dto.sign;

import com.fasterxml.jackson.annotation.JsonIgnore;
import in.pool.server.domain.types.UserStatusTypes;
import in.pool.server.dto.RequestDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SignReqDto extends RequestDto {

    private String id;

    private String password;

    private String key;

    private String email;

    private String workspace_id;

    private String username;

    private String name;

    private String confirm_password;

    private String thirdparty_id;

    @JsonIgnore
    private UserStatusTypes statusTypes;

    public String getStatusTypes() {
        return statusTypes.getStatus();
    }

    public void setStatusTypes(String statusTypes) {
        this.statusTypes = UserStatusTypes.getStatus(statusTypes);
    }
}
