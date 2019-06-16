package in.pool.server.dto.sign;

import in.pool.server.dto.ResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SignResponseDto extends ResponseDto {

    private String token;

    private String username;

}
