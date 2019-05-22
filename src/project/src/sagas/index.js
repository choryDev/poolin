import HeaderSaga from "./HeaderSaga";

export default function* rootSaga() {
    yield [
        HeaderSaga()
    ]
}