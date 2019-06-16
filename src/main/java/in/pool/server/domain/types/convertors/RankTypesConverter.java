package in.pool.server.domain.types.convertors;

import in.pool.server.domain.types.BelongTypes;
import in.pool.server.domain.types.RankTypes;

import javax.persistence.AttributeConverter;

public class RankTypesConverter implements AttributeConverter<RankTypes, String> {

    @Override
    public String convertToDatabaseColumn(RankTypes attribute) {
        return attribute.getRank();
    }

    @Override
    public RankTypes convertToEntityAttribute(String dbData) {
        return RankTypes.getRank(dbData);
    }

}
