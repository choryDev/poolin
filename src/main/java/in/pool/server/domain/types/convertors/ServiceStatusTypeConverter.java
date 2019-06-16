package in.pool.server.domain.types.convertors;

import in.pool.server.domain.types.ServiceStatusTypes;

import javax.persistence.AttributeConverter;

public class ServiceStatusTypeConverter implements AttributeConverter<ServiceStatusTypes, String> {

    @Override
    public String convertToDatabaseColumn(ServiceStatusTypes attribute) {
        return attribute.getStatus();
    }

    @Override
    public ServiceStatusTypes convertToEntityAttribute(String dbData) {
        return ServiceStatusTypes.getStatus(dbData);
    }

}
