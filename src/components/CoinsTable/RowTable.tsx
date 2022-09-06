import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { oneCoinInfo } from "../../types/assets";
import { formatCurrency } from '../../utils/formatCurrency';

interface RowTableProps {
  coin: oneCoinInfo;
  buy: () => void;
}

export const RowTable = ({ buy, coin }: RowTableProps) => {
  const {
    rank,
    supply,
    name,
    priceUsd,
    volumeUsd24Hr,
    marketCapUsd,
    vwap24Hr,
    id,
  } = coin;
  const navigate = useNavigate();
  const navigateToCoin = () => navigate(`/${id}`);
  return (
    <tr className={'coins_table-rows'}>
      <td className={"table__cell"} onClick={navigateToCoin}>
        {rank}
      </td>
      <td className={"table__cell"} onClick={navigateToCoin}>
        {name}
      </td>
      <td className={"table__cell"} onClick={navigateToCoin}>
        {formatCurrency(priceUsd)}$
      </td>
      <td className={"table__cell"} onClick={navigateToCoin}>
        {formatCurrency(marketCapUsd)}
      </td>
      <td className={"table__cell"} onClick={navigateToCoin}>
        {formatCurrency(vwap24Hr)}
      </td>
      <td className={"table__cell"} onClick={navigateToCoin}>
        {formatCurrency(supply)}
      </td>
      <td className={"table__cell"} onClick={navigateToCoin}>
        {formatCurrency(volumeUsd24Hr)}
      </td>
      <td className={"table__cell"}>
        <Button onClick={() => buy()}>Buy</Button>
      </td>
    </tr>
  );
};
