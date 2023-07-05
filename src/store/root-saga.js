import { all, call } from "redux-saga/effects";
import { featuresSaga } from "./features/features.saga";

export function* rootSaga() {
  yield all([call(featuresSaga)]);
}
