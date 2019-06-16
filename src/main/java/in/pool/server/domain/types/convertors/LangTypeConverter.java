package in.pool.server.domain.types.convertors;

import in.pool.server.domain.types.LangTypes;

import javax.persistence.AttributeConverter;

public class LangTypeConverter implements AttributeConverter<LangTypes, String> {

    @Override
    public String convertToDatabaseColumn(LangTypes userSessionTypes) {
        return userSessionTypes.getLangType();
    }

    @Override
    public LangTypes convertToEntityAttribute(String session) {
        return LangTypes.getLangType(session);
    }

}
