package in.pool.server.controllers.router;

import com.google.gson.Gson;
import in.pool.server.utils.keys.ENV;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import javax.validation.constraints.NotNull;
import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Component
public class IndexPagerHandler {

    private final static Gson gson = new Gson();

    @Value("classpath:templates/home.html")
    Resource home;

    @Value("classpath:templates/project.html")
    Resource project;

    @Autowired
    ServerComponent serverComponent;

    public Mono<ServerResponse> nonAuth(ServerRequest req, final Resource html){
        return ServerResponse.ok().contentType(MediaType.TEXT_HTML)
            .syncBody(html).map(m -> m);
    }
    public Mono<ServerResponse> workspace(ServerRequest req) {
        return workspace(req, "");
    }
    public Mono<ServerResponse> workspace(ServerRequest req, String pgmId) {
        HttpHeaders header = new HttpHeaders();
        req.session().map(sess -> {
            header.add(ENV.SESSION_KEY_NAME, sess.getAttribute(ENV.SESSION_KEY_NAME));
            header.setContentType(MediaType.APPLICATION_JSON);
            return sess;
        }).subscribe();

        String sessCmpyId = "";
        try{
            sessCmpyId = req.pathVariable("sess_cmpy_id");
        }catch (Exception e){ }

        Map param = req.queryParams().toSingleValueMap();
        param.put("sess_cmpy_id", sessCmpyId);
        param.put("sess_pgm_id", pgmId);
        HttpEntity entity =  new HttpEntity<>(param, header);
        RestTemplate restTemplate = new RestTemplate();
        String url = "/api/check/session?acc_tp=W";

        try{
//            restTemplate.postForObject(ENV.URL_ELW_API + url, entity, Map.class);
            return goTo(project);
        }catch (Exception e){
            String LOGIN_URL;
            try {
                Map p = gson.fromJson(e.getMessage(), Map.class);
                LOGIN_URL = "/login?key=" + p.get("key") +
                    "&email=" + p.get("email") +
                    "&cmpy_id=" + p.get("cmpy_id");
            }catch (Exception ex){
                LOGIN_URL = "/home";
            }

            return redirectTo(home, LOGIN_URL);
        }
    }

    private Mono<ServerResponse> goTo(Resource resource){
        return ServerResponse.ok()
            .contentType(MediaType.TEXT_HTML)
            .syncBody(resource);
    }

    private Mono<ServerResponse> redirectTo(Resource redirection, @NotNull String redirect){
        return ServerResponse.temporaryRedirect(URI.create(redirect))
            .contentType(MediaType.TEXT_HTML)
            .syncBody(redirection);
    }
}
