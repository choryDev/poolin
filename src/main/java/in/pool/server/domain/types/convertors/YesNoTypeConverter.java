package in.pool.server.domain.types.convertors;

import in.pool.server.domain.types.YesNoTypes;

import javax.persistence.AttributeConverter;

public class YesNoTypeConverter implements AttributeConverter<YesNoTypes, String> {

    @Override
    public String convertToDatabaseColumn(YesNoTypes yesNoType) {
        return yesNoType.getYesNo();
    }

    @Override
    public YesNoTypes convertToEntityAttribute(String yesNo) {
        return YesNoTypes.getYesNo(yesNo);
    }

}
