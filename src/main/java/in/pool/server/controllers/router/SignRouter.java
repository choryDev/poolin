package in.pool.server.controllers.router;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SignRouter {

    @GetMapping("/")
    public String index(){
        return "home" ;
    }

    @GetMapping("/overview")
    public String overview(){
        return "project" ;
    }

    @GetMapping("/v3")
    public String v3(){
        return "project" ;
    }
}
