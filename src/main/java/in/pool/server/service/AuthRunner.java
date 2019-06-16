package in.pool.server.service;

import in.pool.server.dto.RequestDto;
import in.pool.server.dto.ResponseDto;
import org.springframework.stereotype.Component;

@Component
public class AuthRunner <K extends RequestDto, T extends ResponseDto> extends Runner<K, T>  {
    @Override
    protected boolean auth() {
        return true;
    }
}
