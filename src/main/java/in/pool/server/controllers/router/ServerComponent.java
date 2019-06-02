package in.pool.server.controllers.router;

import in.pool.server.service.CoreSpace;
import in.pool.server.utils.keys.ENV;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.server.ServerRequest;

import java.util.*;

@Slf4j
@Service
public class ServerComponent extends CoreSpace {

    public Map makeData(ServerRequest request, Map data){
        data.putAll(request.queryParams().toSingleValueMap());
        String lang = (String)data.get("lang");
        data.put("lang", (lang == null || "".equals(lang)) ? "kr" : lang.toLowerCase());
        return data;
    }

    public String getToken(ServerRequest req){
        Map rtn = new HashMap();
        req.session().map(sess -> {
            rtn.put("key", sess.getAttribute(ENV.SESSION_KEY_NAME));
            return sess;
        }).subscribe();
        return (String)rtn.get("key");
    }

    public MultiValueMap queryParams(ServerRequest req){
        return req.queryParams();
    }

    public String getPath(ServerRequest request){
        return request.path();
    }

    public Map makeData(ServerRequest req){
        return makeData(req, new HashMap());
    }
}