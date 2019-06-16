package in.pool.server.dto.workspace;

import in.pool.server.dto.ResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProjectResDto extends ResponseDto {

    private String project_id;

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

}