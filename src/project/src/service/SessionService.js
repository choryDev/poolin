import sendData from '../assets/utils/sendDataSaga';

export const getListProject = ({...state}) => sendData(`/api/ws/${state.workspaceId}/projects`, 'get', state, {}, {timeout: 30 * 1000})