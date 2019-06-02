package in.pool.server.domain.types.convertors;

import in.pool.server.domain.types.CardUsedTypes;

import javax.persistence.AttributeConverter;

public class CardUsedTypeConverter implements AttributeConverter<CardUsedTypes, String> {

    @Override
    public String convertToDatabaseColumn(CardUsedTypes attribute) {
        return attribute.getUsed();
    }

    @Override
    public CardUsedTypes convertToEntityAttribute(String dbData) {
        return CardUsedTypes.getUsed(dbData);
    }

}
