import { combineReducers } from "redux";
import { assetsReducer } from "./assestsReducer";
import { briefcaseReducer } from './briefcaseReducer';

export const rootReducer = combineReducers({
  assets: assetsReducer,
  briefcase: briefcaseReducer
});

export type RootState = ReturnType<typeof rootReducer>;