package in.pool.server.controllers.router;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;

@Component
public class IndexRouter {

    @Value("classpath:templates/home.html")
    Resource home;

    @Value("classpath:templates/project.html")
    Resource project;

    @Bean
    public RouterFunction<ServerResponse> indexPage(IndexPagerHandler indexPagerHandler){
        return RouterFunctions
            .route(GET("/"), req -> indexPagerHandler.nonAuth(req, home))
            .andRoute(GET("/login"), req -> indexPagerHandler.nonAuth(req, home))
            .andRoute(GET("/home"), req -> indexPagerHandler.nonAuth(req, home))
            .andRoute(GET("/join"), req -> indexPagerHandler.nonAuth(req, home));
    }
}
