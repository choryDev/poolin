package in.pool.server.users.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String test(){
        return "test";
    }
}
