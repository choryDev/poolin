package in.pool.server.dto.workspace;

import in.pool.server.domain.types.RequiredTypes;
import in.pool.server.dto.ResponseDto;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ProjectRequiredResponse extends ResponseDto {

    private RequiredTypes name_reuqired;

    private RequiredTypes email_required;

    private RequiredTypes phone_required;

    private RequiredTypes resume_required;

    private RequiredTypes experience_required;

    private RequiredTypes workHistory_required;

    private RequiredTypes education_required;

    private RequiredTypes coverLetter_required;

    public String getName_reuqired() {
        return name_reuqired.getRequired();
    }

    public String getEmail_required() {
        return email_required.getRequired();
    }

    public String getPhone_required() {
        return phone_required.getRequired();
    }

    public String getResume_required() {
        return resume_required.getRequired();
    }

    public String getExperience_required() {
        return experience_required.getRequired();
    }

    public String getWorkHistory_required() {
        return workHistory_required.getRequired();
    }

    public String getEducation_required() {
        return education_required.getRequired();
    }

    public String getCoverLetter_required() {
        return coverLetter_required.getRequired();
    }

}
