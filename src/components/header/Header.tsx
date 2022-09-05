import { Link } from "react-router-dom";
import "./Header.scss";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { HeaderCard } from "./Header-card";

export function Header() {
  const { assets, loading, error } = useTypedSelector((state) => state.assets);
  const top3Coin = assets.slice(0, 3);
  return (
    <div className={"header"}>
      <div className={"header-coins"}>
        {loading
          ? "Loading..."
          : error
          ? error
          : top3Coin.map((coin) => <HeaderCard coin={coin} />)}
      </div>
      <div>
        <Link
          to={"/my-case"}
          className={"header-card"}
          style={{ textDecoration: "none" }}
        >
          <div>
            <span>134,32 USD +2,38 (1,80 %)</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
