import { bodyReducer } from "./reducers/bodyReducer";
import { appReducer } from "./appReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  newbodyReducer: bodyReducer,
  newappReducer: appReducer,
});

export { rootReducer };
