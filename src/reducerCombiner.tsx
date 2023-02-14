import { appReducer } from "./appReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  links: appReducer,
});

export { rootReducer };
