package in.pool.server.dto.sign;

import in.pool.server.dto.RequestDto;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CodeReqDto extends RequestDto {

    private String upCode;

}
