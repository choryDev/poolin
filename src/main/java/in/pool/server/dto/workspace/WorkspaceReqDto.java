package in.pool.server.dto.workspace;

import in.pool.server.dto.RequestDto;
import in.pool.server.dto.sign.SignReqDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class WorkspaceReqDto extends SignReqDto {

    private String ws_name;

    private String ws_description;

    private List<String> users = new ArrayList();
}
