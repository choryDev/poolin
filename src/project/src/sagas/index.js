import { all } from 'redux-saga/effects';
import HeaderSaga from "./HeaderSaga";


export default function* rootSaga() {
    yield all([
        HeaderSaga()
    ])
}