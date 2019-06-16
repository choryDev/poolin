package in.pool.server.dto.workspace;

import in.pool.server.domain.types.ProjectTypes;
import in.pool.server.domain.types.RequiredTypes;
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

    // project required
    private RequiredTypes name_reuqired;

    private RequiredTypes email_required;

    private RequiredTypes phone_required;

    private RequiredTypes resume_required;

    private RequiredTypes experience_required;

    private RequiredTypes workHistory_required;

    private RequiredTypes education_required;

    private RequiredTypes coverLetter_required;

    // project scorecard
    private Integer scorecard_no;

    private Integer up_scorecard_no;

    private String content;

    // project member
    private List<String> users = new ArrayList<>();

    private String username;

    public void setProject_type(String project_type) {
        this.project_type = ProjectTypes.getProjectType(project_type);
    }

    public void setName_reuqired(String name_reuqired) {
        this.name_reuqired = RequiredTypes.getRequired(name_reuqired);
    }

    public void setEmail_required(String email_required) {
        this.email_required = RequiredTypes.getRequired(email_required);
    }

    public void setPhone_required(String phone_required) {
        this.phone_required = RequiredTypes.getRequired(phone_required);
    }

    public void setResume_required(String resume_required) {
        this.resume_required = RequiredTypes.getRequired(resume_required);
    }

    public void setExperience_required(String experience_required) {
        this.experience_required = RequiredTypes.getRequired(experience_required);
    }

    public void setWorkHistory_required(String workHistory_required) {
        this.workHistory_required = RequiredTypes.getRequired(workHistory_required);
    }

    public void setEducation_required(String education_required) {
        this.education_required = RequiredTypes.getRequired(education_required);
    }

    public void setCoverLetter_required(String coverLetter_required) {
        this.coverLetter_required = RequiredTypes.getRequired(coverLetter_required);
    }
}
