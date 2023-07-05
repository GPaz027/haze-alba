import { createAction } from "../../utils/reducer/reducer.utils";
import { FEATURE_TYPES } from "./features.types";

export const fetchFeaturesStart = () => {
  createAction(FEATURE_TYPES.FETCH_FEATURES_START);
};

export const fetchFeaturesSuccess = (categories) => {
  createAction(FEATURE_TYPES.FETCH_FEATURES_SUCCESS, categories);
};

export const fetchFeaturesFailed = (error) => {
  createAction(FEATURE_TYPES.FETCH_FEATURES_FAILED, error);
};
