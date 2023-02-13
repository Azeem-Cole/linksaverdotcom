import bodyReducer from "./reducers/bodyReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  bodyReducer,
});

export { rootReducer };
