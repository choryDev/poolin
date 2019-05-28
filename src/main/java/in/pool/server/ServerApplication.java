package in.pool.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@Controller
public class ServerApplication {

    @GetMapping("/")
    public String home(){
        return "home";
    }

    @GetMapping("/project")
    public String project(){
        return "project";
    }

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }

}
