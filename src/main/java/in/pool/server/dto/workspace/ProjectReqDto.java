package in.pool.server.dto.workspace;

import in.pool.server.domain.types.ProjectTypes;
import in.pool.server.domain.workspace.Project;
import in.pool.server.dto.RequestDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProjectReqDto extends RequestDto {

    private String workspace_id;

    private Integer project_no;

    private ProjectTypes project_type;

    // project info
    private String project_name;

    private String project_description;

    private String project_department;

    private String project_internal_id;

    private String city;

    private String location;

    private String position_type;

    private String category;

    private String education;

    private String experience;

    // project member
    private List<String> users = new ArrayList<>();

    public void setProject_type(String project_type) {
        this.project_type = ProjectTypes.getProjectType(project_type);
    }
}
