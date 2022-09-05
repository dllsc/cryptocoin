import {
  AssetsAction,
  AssetsState,
  AssetsActionsTypes,
} from "../../types/assets";

const initialState: AssetsState = {
  assets: [],
  loading: false,
  error: null,
};

export const assetsReducer = (
  state = initialState,
  action: AssetsAction
): AssetsState => {
  switch (action.type) {
    case AssetsActionsTypes.FETCH_ASSETS:
      return { loading: true, error: null, assets: [] };
    case AssetsActionsTypes.FETCH_ASSETS_SUCCESS:
      return { loading: false, error: null, assets: action.payload };
    case AssetsActionsTypes.FETCH_ASSETS_ERROR:
      return { loading: false, error: action.payload, assets: [] };
    default:
      return state;
  }
};