package in.pool.server.controllers;

import in.pool.server.domain.types.SessionLayerTypes;
import in.pool.server.dto.ResponseDto;
import in.pool.server.dto.ResponseLinks;
import in.pool.server.dto.workspace.WorkspaceReqDto;
import in.pool.server.service.AuthRunner;
import in.pool.server.service.workspace.WSGetService;
import in.pool.server.service.workspace.WSSaveService;
import in.pool.server.utils.keys.ENV;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
public class WorkspaceController {

    @Autowired
    private AuthRunner<WorkspaceReqDto, ResponseDto> authRunner;

    @Autowired
    private WSSaveService wsSaveService;

    @Autowired
    private WSGetService wsGetService;

    @PostMapping(ENV.PUBLIC_ME + "/workspace")
    public ResponseEntity newWorkspace(@PathVariable String layer, HttpServletRequest httpServletRequest, @RequestBody WorkspaceReqDto reqDto){
        reqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        return authRunner.execute(httpServletRequest, reqDto, wsSaveService::saveNewWorkspace, response -> new ResponseLinks(response));
    }

    @PutMapping(ENV.PUBLIC_WORKSPACE)
    public ResponseEntity updateWorkspace(@PathVariable String layer, @PathVariable String sess_workspace_id, HttpServletRequest httpServletRequest, @RequestBody WorkspaceReqDto workspaceReqDto){
        workspaceReqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        workspaceReqDto.setSess_workspace_id(sess_workspace_id);
        return authRunner.execute(httpServletRequest, workspaceReqDto, wsSaveService::updateWorkspace, response -> new ResponseLinks(response));
    }

    @GetMapping(ENV.PUBLIC_WORKSPACE + "/members")
    public ResponseEntity getMembersInWorkspace(@PathVariable String layer, @PathVariable String sess_workspace_id, HttpServletRequest httpServletRequest, @RequestBody WorkspaceReqDto workspaceReqDto){
        workspaceReqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        workspaceReqDto.setSess_workspace_id(sess_workspace_id);
        return authRunner.execute(httpServletRequest, workspaceReqDto, wsGetService::membersInWorkspace, response -> new ResponseLinks(response));
    }


}
