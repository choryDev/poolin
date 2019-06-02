package in.pool.server.domain.types.convertors;

import in.pool.server.domain.types.RemoteTypes;

import javax.persistence.AttributeConverter;

public class RemoteTypesConverter implements AttributeConverter<RemoteTypes, String> {
    @Override
    public String convertToDatabaseColumn(RemoteTypes attribute) {
        return attribute.getRemote();
    }

    @Override
    public RemoteTypes convertToEntityAttribute(String dbData) {
        return RemoteTypes.getRemote(dbData);
    }
}
