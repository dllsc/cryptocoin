import { Dispatch } from "redux";
import {
  BriefcaseAction,
  BriefcaseActionsTypes,
  OneCoinCase,
} from "../../types/briefcase";

export const speculationBriefcase = (payload: OneCoinCase) => {
  return function (dispatch: Dispatch<BriefcaseAction>) {
    const response = localStorage.getItem("briefcase");
    if (response) {
      const briefcase = JSON.parse(response);
      localStorage.setItem(
        "briefcase",
        JSON.stringify([...briefcase, payload])
      );
    } else {
      localStorage.setItem("briefcase", JSON.stringify([payload]));
    }
    dispatch({ type: BriefcaseActionsTypes.SPECULATION_COIN, payload });
  };
};

export const deleteCoinBriefcase = (payload: string) => {
  return function (dispatch: Dispatch<BriefcaseAction>) {
    dispatch({ type: BriefcaseActionsTypes.DELETE_COIN, payload });
  };
};