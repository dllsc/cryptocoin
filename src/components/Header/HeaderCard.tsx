import { Link } from "react-router-dom";
import { oneCoinInfo } from "../../types/assets";
import { formatCurrency } from "../../utils/formatCurrency";

interface HeaderCardProps {
  coin: oneCoinInfo;
}

export const HeaderCard = ({ coin }: HeaderCardProps) => {
  const { id, name, symbol, priceUsd } = coin;
  return (
    <Link
      key={id}
      className={"header-card header-card-coin"}
      to={`/${id}`}
      style={{ textDecoration: "none" }}
    >
      <div>
        <h4>{name}</h4>
        <span>{symbol}</span>
      </div>
      <h2>${formatCurrency(priceUsd)}</h2>
    </Link>
  );
};
