import { put, takeEvery, call } from 'redux-saga/effects';
import {getListProject} from '../service/SessionService';
import {FETCH_LIST_PROJECT, FETCH_LIST_PROJECT_SUCCESS} from '../actions/def/SessionType'

function* getMenu(action) {
  const {status, error, data} = yield call(getListProject, {
    workspaceId: action.workspaceId
  });
  if(status === 200){
    yield put({
      type: FETCH_LIST_PROJECT_SUCCESS,
      list: data.list,
      workspaceId: action.workspaceId
    });
  }
}


export default function* HeaderSaga(){
  yield takeEvery(FETCH_LIST_PROJECT, getMenu);
}

