package in.pool.server.domain.types.convertors;

import in.pool.server.domain.types.FileTypes;

import javax.persistence.AttributeConverter;

public class FileTypeConverter implements AttributeConverter<FileTypes, String> {

    @Override
    public String convertToDatabaseColumn(FileTypes attribute) {
        return attribute.getFileType();
    }

    @Override
    public FileTypes convertToEntityAttribute(String dbData) {
        return FileTypes.getFileType(dbData);
    }

}
