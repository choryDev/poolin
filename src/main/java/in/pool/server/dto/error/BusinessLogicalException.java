package in.pool.server.dto.error;

import org.springframework.http.HttpStatus;

public class BusinessLogicalException extends RuntimeException {

    public BusinessLogicalException(String message) {
        super(message);
    }

    public BusinessLogicalException(String msg, HttpStatus httpStatus, String err_code){
        this.msg = msg;
        this.errHttpStatus = httpStatus;
        this.err_code = err_code;
    }

    private String msg;

    private String err_code;

    private HttpStatus errHttpStatus = HttpStatus.BAD_REQUEST;

    public HttpStatus getErrHttpStatus() {
        return errHttpStatus;
    }

    public void setErrHttpStatus(HttpStatus errHttpStatus) {
        this.errHttpStatus = errHttpStatus;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getErr_code() {
        return err_code;
    }

    public void setErr_code(String err_code) {
        this.err_code = err_code;
    }
}