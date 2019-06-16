package in.pool.server.dto.workspace.mapping;

import in.pool.server.domain.types.AuthTypes;
import in.pool.server.domain.types.UserStatusTypes;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class MyStatusWorkspace {
    private Integer workspaceNo;

    private Integer userNo;

    private AuthTypes authType;

    private UserStatusTypes status;

    private LocalDateTime insertedDate;

    public void setAuthType(String authType) {
        this.authType = AuthTypes.getAuth(authType);
    }

    public void setStatus(String status) {
        this.status = UserStatusTypes.getStatus(status);
    }
}
