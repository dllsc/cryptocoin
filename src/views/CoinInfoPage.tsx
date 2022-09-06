import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypesSelector";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "../components/CoinsTable/Table";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { formattingDate } from "../utils/formattingDate";
import { oneCoinInfo } from "../types/assets";

interface HistoryOneCoin {
  priceUsd: string;
  date: string;
}

interface CoinInfoProps {
  coin: oneCoinInfo;
  data: HistoryOneCoin[];
}

export const CoinInfoPage = () => {
  const { coinId } = useParams();
  const { assets, loading } = useTypedSelector((state) => state.assets);

  const [coin, setCoin] = useState<oneCoinInfo>();
  const [data, setData] = useState<HistoryOneCoin[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  useEffect(() => {
    if (!loading) {
      const coin = assets.find((a) => a.id === coinId);
      if (coin) {
        setCoin(coin);
        fetch(coinId!);
      }
    }
  }, [coinId, loading]);

  const fetch = async (coinId: string) => {
    setLoadingHistory(true);
    const response = await axios.get(
      `https://api.coincap.io/v2/assets/${coinId}/history?interval=m1`
    );
    setData(response.data.data);
    setLoadingHistory(false);
  };

  if (loading || loadingHistory) {
    return <>Loading...</>;
  }
  if (!coin) {
    return <>Page not find</>;
  }

  return <CoinInfo coin={coin} data={data} />;
};

const CoinInfo = ({ coin, data }: CoinInfoProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
      }}
    >
      <Table assets={[coin]} />
      <LineChart
        width={1200}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="priceUsd" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis tickFormatter={formattingDate} dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};
