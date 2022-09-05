import { Button } from "../Button/Button";

interface RowTableProps {
  rank: string;
  name: string;
  price: string;
  marketCap: string;
  vwap: string;
  supply: string;
  volume: string;
  buy: () => void;
}

export const RowTable = ({
  buy,
  name,
  rank,
  supply,
  vwap,
  volume,
  price,
  marketCap,
}: RowTableProps) => {
  return (
    <tr>
      <td className={"table__cell"}>{rank}</td>
      <td className={"table__cell"}>{name}</td>
      <td className={"table__cell"}>{price}</td>
      <td className={"table__cell"}>{marketCap}</td>
      <td className={"table__cell"}>{vwap}</td>
      <td className={"table__cell"}>{supply}</td>
      <td className={"table__cell"}>{volume}</td>
      <td className={"table__cell"}>
        <Button onClick={() => buy()}>Buy</Button>
      </td>
    </tr>
  );
};
