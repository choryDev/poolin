package in.pool.server.dto.workspace;

import in.pool.server.dto.ResponseDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WorkspaceResDto extends ResponseDto {

    private String workspace_id;

    private String ws_name;

    private String ws_description;

}
