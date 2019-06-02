package in.pool.server.domain.types.convertors;


import in.pool.server.domain.types.BelongTypes;

import javax.persistence.AttributeConverter;

public class BelongTypeConverter implements AttributeConverter<BelongTypes, String> {

    @Override
    public String convertToDatabaseColumn(BelongTypes attribute) {
        return attribute.getBelong();
    }

    @Override
    public BelongTypes convertToEntityAttribute(String dbData) {
        return BelongTypes.getBelong(dbData);
    }

}
