export interface OneCoinCase {
  id: string;
  price: string;
  amount: string;
}

export interface BriefcaseState {
  coinsPriceAtTimeBuying: OneCoinCase[];
}

export enum BriefcaseActionsTypes {
  SPECULATION_COIN = "SPECULATION_COIN",
  DELETE_COIN = "DELETE_COIN"
}

export interface SpeculationCoinBriefcaseActions {
  type: BriefcaseActionsTypes.SPECULATION_COIN;
  payload: OneCoinCase;
}

export interface DeleteCoinBriefcaseActions {
  type: BriefcaseActionsTypes.DELETE_COIN;
  payload: string;
}


export type BriefcaseAction = | SpeculationCoinBriefcaseActions | DeleteCoinBriefcaseActions;
