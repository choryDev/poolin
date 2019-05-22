import { put, takeEvery } from 'redux-saga/effects';

function* getMenu(action) {

  yield put({
    type: 's'
  })
}


export default function* HeaderSagaa(){
  yield takeEvery('a', getMenu);
}

