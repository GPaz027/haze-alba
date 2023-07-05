import { getFeaturesAndDocuments } from "../../utils/firebase/firebase.utils";
import { put, call, all } from "redux-saga";
import { fetchFeaturesFailed, fetchFeaturesSuccess } from "./features.action";

export function* fetchFeaturesAsync() {
  try {
    const featuresArray = yield call(getFeaturesAndDocuments, "features");
    yield put(fetchFeaturesSuccess(featuresArray));
  } catch (err) {
    yield put(fetchFeaturesFailed(err));
  }
}

export function* onFetchFeatures() {
    
}

export function* featuresSaga() {
  yield all([call(onFetchFeatures)]);
}
