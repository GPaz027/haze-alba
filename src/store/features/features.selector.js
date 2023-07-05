import { createSelector } from "reselect";

const selectFeatureReducer = (state) => state.features;

export const selectFeatures = createSelector(
  [selectFeatureReducer],
  (featuresSlice) => featuresSlice.features
);
