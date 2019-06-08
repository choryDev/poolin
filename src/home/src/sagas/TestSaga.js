import { put, takeEvery } from 'redux-saga/effects';

function* getMenu(action) {

  console.log('alskdjflaksjdflkasj')

  yield put({
    type: ''
  })
}

function* getMenus(action) {

  console.log('123123123123123')

  yield put({
    type: ''
  })
}

export default function* TestSaga(){
  yield takeEvery('', getMenu);
  yield takeEvery('', getMenus);
}