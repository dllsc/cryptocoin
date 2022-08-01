import { RowTable } from "../RowTable";
import "./AllCoinTable.scss";

export const Table = () => {
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
      <tbody className={'table_rows'}>
        <RowTable
          name={"BitCoin"}
          volume={43}
          buy={() => console.log("popup")}
          marketCap={333}
          price={33}
          rank={1}
          supply={323}
          vwap={23}
        />
        <RowTable
          name={"Ethereum\n" + "ETH"}
          volume={5}
          buy={() => console.log("popup")}
          marketCap={32}
          price={200}
          rank={2}
          supply={3333}
          vwap={3241}
        />
      </tbody>
    </table>
  );
};
