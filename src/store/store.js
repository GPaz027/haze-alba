import { legacy_store as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import storage from "redux-persist/lib/storage";

import reducer from "./reducers";
import mySaga from "./sagas";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["feature"],
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// Then run the saga
sagaMiddleware.run(mySaga);

// Render the application
