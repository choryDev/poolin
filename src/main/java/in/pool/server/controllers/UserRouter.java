package in.pool.server.controllers;

import in.pool.server.domain.types.SessionLayerTypes;
import in.pool.server.dto.RequestDto;
import in.pool.server.dto.ResponseDto;
import in.pool.server.dto.ResponseLinks;
import in.pool.server.dto.workspace.WorkspaceReqDto;
import in.pool.server.service.AuthRunner;
import in.pool.server.service.comm.CommService;
import in.pool.server.service.user.UserService;
import in.pool.server.utils.keys.ENV;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class UserRouter {

    @Autowired
    private AuthRunner<RequestDto, ResponseDto> authRunner;

    @Autowired
    private UserService userService;

    @Autowired
    private CommService commService;

    @GetMapping(ENV.PUBLIC_ME + "/workspaces")
    public ResponseEntity getMembersInWorkspace(@PathVariable String layer, HttpServletRequest httpServletRequest, RequestDto workspaceReqDto){
        workspaceReqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        return authRunner.execute(httpServletRequest, workspaceReqDto, userService::myWorkspaceList, response -> new ResponseLinks(response));
    }

    @GetMapping(ENV.PUBLIC_WORKSPACE + "/projects")
    public ResponseEntity getMyProjectList(@PathVariable String layer, @PathVariable String sess_workspace_id, HttpServletRequest httpServletRequest, WorkspaceReqDto workspaceReqDto){
        workspaceReqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        workspaceReqDto.setSess_workspace_id(sess_workspace_id);
        return authRunner.execute(httpServletRequest, workspaceReqDto, userService::myProjectList, response -> new ResponseLinks(response));
    }

    @GetMapping(ENV.PUBLIC_ME + "/codes")
    public ResponseEntity getListOfCodes(@PathVariable String layer, HttpServletRequest httpServletRequest, WorkspaceReqDto workspaceReqDto){
        workspaceReqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        return authRunner.execute(httpServletRequest, workspaceReqDto, commService::getCodes, response -> new ResponseLinks(response));
    }
}