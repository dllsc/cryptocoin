export interface oneCoinInfo {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
  info: string;
}

export interface AssetsState {
  assets: oneCoinInfo[];
  loading: boolean;
  error: null | string;
}

export enum AssetsActionsTypes {
  FETCH_ASSETS = "FETCH_ASSETS",
  FETCH_ASSETS_SUCCESS = "FETCH_ASSETS_SUCCESS",
  FETCH_ASSETS_ERROR = "FETCH_ASSETS_ERROR",
}

export interface FetchAssetsActions {
  type: AssetsActionsTypes.FETCH_ASSETS;
}

export interface FetchAssetsSuccessActions {
  type: AssetsActionsTypes.FETCH_ASSETS_SUCCESS;
  payload: oneCoinInfo[];
}

export interface FetchAssetsErrorActions {
  type: AssetsActionsTypes.FETCH_ASSETS_ERROR;
  payload: string;
}

export type AssetsAction =
  | FetchAssetsActions
  | FetchAssetsErrorActions
  | FetchAssetsSuccessActions;
