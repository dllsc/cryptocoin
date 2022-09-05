import { Dispatch } from "redux";
import { AssetsAction, AssetsActionsTypes } from "../../types/assets";
import axios from "axios";

export const fetchAssets = () => {
  return async function (dispatch: Dispatch<AssetsAction>) {
    try {
      dispatch({ type: AssetsActionsTypes.FETCH_ASSETS });
      const response = await axios.get("https://api.coincap.io/v2/assets");
      dispatch({
        type: AssetsActionsTypes.FETCH_ASSETS_SUCCESS,
        payload: response.data.data,
      });
    } catch (e) {
      dispatch({
        type: AssetsActionsTypes.FETCH_ASSETS_ERROR,
        payload: "Error on data load",
      });
    }
  };
};