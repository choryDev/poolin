package in.pool.server.domain.types.convertors;

import in.pool.server.domain.types.UserStatusTypes;

import javax.persistence.AttributeConverter;

public class UserStatusTypeConverter implements AttributeConverter<UserStatusTypes, String> {

    @Override
    public String convertToDatabaseColumn(UserStatusTypes userStatusTypes) {
        return userStatusTypes.getStatus();
    }

    @Override
    public UserStatusTypes convertToEntityAttribute(String status) {
        return UserStatusTypes.getStatus(status);
    }

}
