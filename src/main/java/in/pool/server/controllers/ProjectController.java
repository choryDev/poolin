package in.pool.server.controllers;

import in.pool.server.domain.types.SessionLayerTypes;
import in.pool.server.dto.ResponseDto;
import in.pool.server.dto.ResponseLinks;
import in.pool.server.dto.workspace.ProjectReqDto;
import in.pool.server.service.AuthRunner;
import in.pool.server.service.workspace.ProjectGetService;
import in.pool.server.service.workspace.ProjectSaveService;
import in.pool.server.utils.keys.ENV;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.MediaTypes;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(produces = MediaTypes.HAL_JSON_UTF8_VALUE)
public class ProjectController {

    @Autowired
    private AuthRunner<ProjectReqDto, ResponseDto> authRunner;

    @Autowired
    private ProjectSaveService projectSaveService;

    @Autowired
    private ProjectGetService projectGetService;

    @PostMapping(ENV.PUBLIC_WORKSPACE + "/project")
    public ResponseEntity newProject(@PathVariable String layer,@PathVariable String sess_workspace_id, HttpServletRequest httpServletRequest, @RequestBody ProjectReqDto reqDto){
        reqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        reqDto.setSess_workspace_id(sess_workspace_id);
        return authRunner.execute(httpServletRequest, reqDto, projectSaveService::newProject, response -> new ResponseLinks(response));
    }

    @PatchMapping(ENV.PUBLIC_PROJECT)
    public ResponseEntity updateProject(@PathVariable String layer,@PathVariable String sess_workspace_id, @PathVariable String sess_project_id, HttpServletRequest httpServletRequest, @RequestBody ProjectReqDto reqDto){
        reqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        reqDto.setSess_workspace_id(sess_workspace_id);
        reqDto.setSess_project_id(sess_project_id);
        return authRunner.execute(httpServletRequest, reqDto, projectSaveService::updateProject, response -> new ResponseLinks(response));
    }

    @GetMapping(ENV.PUBLIC_PROJECT + "/general")
    public ResponseEntity getProject(@PathVariable String layer,@PathVariable String sess_workspace_id, @PathVariable String sess_project_id, HttpServletRequest httpServletRequest, @RequestBody ProjectReqDto reqDto){
        reqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        reqDto.setSess_workspace_id(sess_workspace_id);
        reqDto.setSess_project_id(sess_project_id);
        return authRunner.execute(httpServletRequest, reqDto, projectGetService::getInformation, response -> new ResponseLinks(response));
    }

}