package in.pool.server.domain.types.convertors;

import in.pool.server.domain.types.UserAccountTypes;

import javax.persistence.AttributeConverter;

public class UserAccountTypeConverter implements AttributeConverter<UserAccountTypes, String> {
    @Override
    public String convertToDatabaseColumn(UserAccountTypes attribute) {
        return attribute.getAccount();
    }

    @Override
    public UserAccountTypes convertToEntityAttribute(String dbData) {
        return UserAccountTypes.getAccount(dbData);
    }
}

