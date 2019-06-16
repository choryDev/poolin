package in.pool.server.domain.types.convertors;

import in.pool.server.domain.types.UserSessionTypes;

import javax.persistence.AttributeConverter;

public class UserSessionTypeConverter implements AttributeConverter<UserSessionTypes, String> {
    @Override
    public String convertToDatabaseColumn(UserSessionTypes userSessionTypes) {
        return userSessionTypes.getSession();
    }

    @Override
    public UserSessionTypes convertToEntityAttribute(String session) {
        return UserSessionTypes.getSession(session);
    }
}
