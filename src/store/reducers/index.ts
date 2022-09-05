import { combineReducers } from "redux";
import { assetsReducer } from "./assestsReducer";

export const rootReducer = combineReducers({
  assets: assetsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;