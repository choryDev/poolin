package in.pool.server.domain.types.convertors;

import in.pool.server.domain.types.ProjectTypes;
import in.pool.server.domain.types.RequiredTypes;

import javax.persistence.AttributeConverter;

public class ProjectTypesConverter implements AttributeConverter<ProjectTypes, String> {
    @Override
    public String convertToDatabaseColumn(ProjectTypes attribute) {
        return attribute.getProjectType();
    }

    @Override
    public ProjectTypes convertToEntityAttribute(String dbData) {
        return ProjectTypes.getProjectType(dbData);
    }
}
