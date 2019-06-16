package in.pool.server.dto.sign;

import in.pool.server.dto.ResponseDto;

import java.util.HashMap;
import java.util.Map;

public class CodeResponse extends ResponseDto {

    private Map codes = new HashMap();

    public Map getCodes() {
        return codes;
    }

    public void setCodes(Map codes) {
        this.codes = codes;
    }
}
