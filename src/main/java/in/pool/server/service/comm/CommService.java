package in.pool.server.service.comm;

import in.pool.server.dto.RequestDto;
import in.pool.server.dto.ResponseDto;
import in.pool.server.dto.ResponseListDto;
import in.pool.server.dto.sign.CodeResponse;
import in.pool.server.service.CoreSpace;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CommService extends CoreSpace {

    public ResponseDto getCodes(RequestDto requestDto){
        CodeResponse response = new CodeResponse();
        Map result = new HashMap();
        Map param = new HashMap();
        param.put("lang", requestDto.getLang());

        param.put("upCode", 401);
        param.put("upLang", 401);
        result.put("typePosition", getList("comm.comm.getCodes", param));

        param.put("upCode", 402);
        param.put("upLang", 402);
        result.put("typeCategory", getList("comm.comm.getCodes", param));

        param.put("upCode", 403);
        param.put("upLang", 403);
        result.put("typeEdu", getList("comm.comm.getCodes", param));

        param.put("upCode", 404);
        param.put("upLang", 404);
        result.put("typeExp", getList("comm.comm.getCodes", param));

        response.setCodes(result);

        return response;
    }
}
