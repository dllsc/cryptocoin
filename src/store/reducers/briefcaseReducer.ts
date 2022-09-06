import {
  BriefcaseAction,
  BriefcaseActionsTypes,
  BriefcaseState,
} from "../../types/briefcase";

const localStorageCoinsPriceAtTimeBuying = localStorage.getItem("briefcase");

const initialCoinsPriceAtTimeBuying = localStorageCoinsPriceAtTimeBuying
  ? JSON.parse(localStorageCoinsPriceAtTimeBuying)
  : [];

const initialState: BriefcaseState = {
  coinsPriceAtTimeBuying: initialCoinsPriceAtTimeBuying,
};

export const briefcaseReducer = (
  state = initialState,
  action: BriefcaseAction
): BriefcaseState => {
  switch (action.type) {
    case BriefcaseActionsTypes.SPECULATION_COIN:
      return {
        coinsPriceAtTimeBuying: [
          ...state.coinsPriceAtTimeBuying,
          action.payload,
        ],
      };
    case BriefcaseActionsTypes.DELETE_COIN:
      return {
        coinsPriceAtTimeBuying: state.coinsPriceAtTimeBuying.filter(coin => coin.id !== action.payload),
      };

    default:
      return state;
  }
};
