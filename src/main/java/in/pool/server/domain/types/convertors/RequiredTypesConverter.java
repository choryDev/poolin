package in.pool.server.domain.types.convertors;

import in.pool.server.domain.types.RequiredTypes;

import javax.persistence.AttributeConverter;

public class RequiredTypesConverter implements AttributeConverter<RequiredTypes, String> {

    @Override
    public String convertToDatabaseColumn(RequiredTypes attribute) {
        return attribute.getRequired();
    }

    @Override
    public RequiredTypes convertToEntityAttribute(String dbData) {
        return RequiredTypes.getRequired(dbData);
    }

}
