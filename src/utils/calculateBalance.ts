import { oneCoinInfo } from "../types/assets";
import { OneCoinCase } from "../types/briefcase";

interface CalculateBalanceProps {
  coinsPriceAtTimeBuying: OneCoinCase[];
  assets: oneCoinInfo[];
}

export const calculateBalance = ({
  coinsPriceAtTimeBuying,
  assets,
}: CalculateBalanceProps) => {
  const { balance, initialBalance } = coinsPriceAtTimeBuying.reduce(
    (acc, oneCase) => {
      const current = assets.find((coin) => coin.id === oneCase.id);
      const balance = Number(current!.priceUsd) * Number(oneCase.amount);
      const initialBalance = Number(oneCase.price) * Number(oneCase.amount);
      return (
        (acc.balance += balance), (acc.initialBalance += initialBalance), acc);
    },
    {
      balance: 0,
      initialBalance: 0,
    }
  );
  const percent =
    balance !== 0 ? ((balance - initialBalance) / balance) * 100 : 0;
  const profit = { number: balance - initialBalance, percent };
  return { balance, profit };
};

