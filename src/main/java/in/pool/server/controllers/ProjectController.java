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
    public ResponseEntity getProjectGeneral(@PathVariable String layer,@PathVariable String sess_workspace_id, @PathVariable String sess_project_id, HttpServletRequest httpServletRequest, @RequestBody ProjectReqDto reqDto){
        reqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        reqDto.setSess_workspace_id(sess_workspace_id);
        reqDto.setSess_project_id(sess_project_id);
        return authRunner.execute(httpServletRequest, reqDto, projectGetService::getInformation, response -> new ResponseLinks(response));
    }

    @PatchMapping(ENV.PUBLIC_PROJECT + "/required")
    public ResponseEntity updateRequired(@PathVariable String layer,@PathVariable String sess_workspace_id, @PathVariable String sess_project_id, HttpServletRequest httpServletRequest, @RequestBody ProjectReqDto reqDto){
        reqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        reqDto.setSess_workspace_id(sess_workspace_id);
        reqDto.setSess_project_id(sess_project_id);
        return authRunner.execute(httpServletRequest, reqDto, projectSaveService::updateRequired, response -> new ResponseLinks(response));
    }

    @GetMapping(ENV.PUBLIC_PROJECT + "/required")
    public ResponseEntity getRequired(@PathVariable String layer,@PathVariable String sess_workspace_id, @PathVariable String sess_project_id, HttpServletRequest httpServletRequest, ProjectReqDto reqDto){
        reqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        reqDto.setSess_workspace_id(sess_workspace_id);
        reqDto.setSess_project_id(sess_project_id);
        return authRunner.execute(httpServletRequest, reqDto, projectGetService::getRequired, response -> new ResponseLinks(response));
    }

    @PostMapping(ENV.PUBLIC_PROJECT + "/scorecard")
    public ResponseEntity updateScorecard(@PathVariable String layer,@PathVariable String sess_workspace_id, @PathVariable String sess_project_id, HttpServletRequest httpServletRequest, @RequestBody ProjectReqDto reqDto){
        reqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        reqDto.setSess_workspace_id(sess_workspace_id);
        reqDto.setSess_project_id(sess_project_id);
        return authRunner.execute(httpServletRequest, reqDto, projectSaveService::updateScorecard, response -> new ResponseLinks(response));
    }

    @GetMapping(ENV.PUBLIC_PROJECT + "/scorecard")
    public ResponseEntity getScorecardList(@PathVariable String layer,@PathVariable String sess_workspace_id, @PathVariable String sess_project_id, HttpServletRequest httpServletRequest, ProjectReqDto reqDto){
        reqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        reqDto.setSess_workspace_id(sess_workspace_id);
        reqDto.setSess_project_id(sess_project_id);
        return authRunner.execute(httpServletRequest, reqDto, projectGetService::getScorecardList, response -> new ResponseLinks(response));
    }

    @PostMapping(ENV.PUBLIC_PROJECT + "/member")
    public ResponseEntity addNewMembers(@PathVariable String layer,@PathVariable String sess_workspace_id, @PathVariable String sess_project_id, HttpServletRequest httpServletRequest, @RequestBody ProjectReqDto reqDto){
        reqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        reqDto.setSess_workspace_id(sess_workspace_id);
        reqDto.setSess_project_id(sess_project_id);
        return authRunner.execute(httpServletRequest, reqDto, projectSaveService::addNewMember, response -> new ResponseLinks(response));
    }

    @DeleteMapping(ENV.PUBLIC_PROJECT + "/member")
    public ResponseEntity deleteMember(@PathVariable String layer,@PathVariable String sess_workspace_id, @PathVariable String sess_project_id, HttpServletRequest httpServletRequest, ProjectReqDto reqDto){
        reqDto.setSess_layer(SessionLayerTypes.getLayerType(layer));
        reqDto.setSess_workspace_id(sess_workspace_id);
        reqDto.setSess_project_id(sess_project_id);
        return authRunner.execute(httpServletRequest, reqDto, projectSaveService::deleteMember, response -> new ResponseLinks(response));
    }
}