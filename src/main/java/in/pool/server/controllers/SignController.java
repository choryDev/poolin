package in.pool.server.controllers;

import in.pool.server.dto.ResponseDto;
import in.pool.server.dto.ResponseLinks;
import in.pool.server.dto.sign.SignReqDto;
import in.pool.server.service.NoAuthRunner;
import in.pool.server.service.sign.SignService;
import in.pool.server.utils.keys.ENV;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.MediaTypes;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(value = ENV.PUBLIC, produces = MediaTypes.HAL_JSON_UTF8_VALUE)
public class SignController {

    @Autowired
    private NoAuthRunner<SignReqDto, ResponseDto> runner;

    @Autowired
    private SignService signService;

    @PostMapping("/invitation")
    public ResponseEntity sendInvitation(HttpServletRequest httpServletRequest, @RequestBody SignReqDto requestDto){
        return runner.execute(httpServletRequest, requestDto, signService::requestSignUp, response -> new ResponseLinks(response));
    }

    @PostMapping("/sign/in")
    public ResponseEntity signIn(HttpServletRequest httpServletRequest, @RequestBody SignReqDto requestDto){
        return runner.execute(httpServletRequest, requestDto, signService::signIn, response -> new ResponseLinks(response));
    }

    @PutMapping("/sign/up")
    public ResponseEntity signUp(HttpServletRequest httpServletRequest, @RequestBody SignReqDto requestDto){
        return runner.execute(httpServletRequest, requestDto, signService::signUp, response -> new ResponseLinks(response));
    }

    @PostMapping("/request/reset_password")
    public ResponseEntity requestResetPwd(HttpServletRequest httpServletRequest, @RequestBody SignReqDto requestDto){
        return runner.execute(httpServletRequest, requestDto, signService::requestResetPwd, response -> new ResponseLinks(response));
    }

    @PutMapping("/reset/password")
    public ResponseEntity resetPassword(HttpServletRequest httpServletRequest, @RequestBody SignReqDto requestDto){
        return runner.execute(httpServletRequest, requestDto, signService::resetPassword, response -> new ResponseLinks(response));
    }

}
