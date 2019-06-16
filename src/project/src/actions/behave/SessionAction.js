import {SET_WORKSPACE_ID, FETCH_LIST_PROJECT} from '../def/SessionType';

export const setWorkspaceId = workspaceId => ({
  type: SET_WORKSPACE_ID,
  workspaceId
});

export const fetchListProject = workspaceId => ({
  type: FETCH_LIST_PROJECT,
  workspaceId
})