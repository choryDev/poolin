package in.pool.server.config;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class ErrorGlobalConfig {

    @ExceptionHandler({IOException.class, SQLException.class})
    public Map handleException(Exception ex) {
        Map error = new HashMap();
        ex.printStackTrace();
        return error;
    }

}