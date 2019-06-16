import {Map, List} from 'immutable';
import { SET_WORKSPACE_ID, FETCH_LIST_PROJECT, FETCH_LIST_PROJECT_SUCCESS } from '../actions/def/SessionType'

const init = new Map({
    projectList: [],
    loading_project_list: false,
    workspaceId: ''
});

const SessionReducer = (state = init, actions) => {
    switch (actions.type){
        case SET_WORKSPACE_ID:
            return state.set('workspaceId', actions.workspaceId);
        case FETCH_LIST_PROJECT:
            return state.set('loading_project_list', true).set('workspaceId', actions.workspaceId)
        case FETCH_LIST_PROJECT_SUCCESS:
            return state.set('projectList', actions.list)
                .set('loading_project_list', false)
                .set('workspaceId', actions.workspaceId)
      default : return state;
    }
};

export default SessionReducer;