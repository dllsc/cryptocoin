import { Link } from "react-router-dom";
import { oneCoinInfo } from "../../types/assets";
import { formatCurrency } from "../../utils/formatCurrency";

interface HeaderCardProps {
  coin: oneCoinInfo;
}

export const HeaderCard = ({ coin }: HeaderCardProps) => {
  return (
    <Link
      key={coin.id}
      className={"header-card header-card-coin"}
      to={`/${coin.id}`}
      style={{ textDecoration: "none" }}
    >
      <div>
        <h4>{coin.name}</h4>
        <span>{coin.symbol}</span>
      </div>
      <h2>{formatCurrency(coin.priceUsd)}</h2>
    </Link>
  );
};