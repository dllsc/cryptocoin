import { RowTable } from "./RowTable";
import "./Table.scss";
import { oneCoinInfo } from "../../types/assets";

interface tableData {
  assets: oneCoinInfo[];
}

export const Table = ({ assets }: tableData) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>VWAP(24Hr)</th>
          <th>Supply</th>
          <th>Volume(24Hr)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className={"table_rows"}>
        {assets.map((coin) => (
          <RowTable coin={coin} buy={() => console.log("popup")} />
        ))}
      </tbody>
    </table>
  );
};
