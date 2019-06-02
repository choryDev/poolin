package in.pool.server.domain.types.convertors;

import in.pool.server.domain.types.AuthTypes;

import javax.persistence.AttributeConverter;

public class AuthTypesConverter implements AttributeConverter<AuthTypes, String> {

    @Override
    public String convertToDatabaseColumn(AuthTypes attribute) {
        return attribute.getAuth();
    }

    @Override
    public AuthTypes convertToEntityAttribute(String dbData) {
        return AuthTypes.getAuth(dbData);
    }

}
