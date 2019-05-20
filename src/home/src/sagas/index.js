import TestSaga from "./TestSaga";

export default function* rootSaga() {
    yield [
        TestSaga(),
    ]
}