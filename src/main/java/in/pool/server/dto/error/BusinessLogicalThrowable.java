package in.pool.server.dto.error;

import org.springframework.http.HttpStatus;

public class BusinessLogicalThrowable extends Throwable {
    private HttpStatus errHttpStatus;

    private String message;
}
