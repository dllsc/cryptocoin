import "./Header.scss";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { HeaderCard } from "./HeaderCard";
import { HeaderBriefCase } from './HeaderBriefcase';
import React from 'react';

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
          <HeaderBriefCase/>
      </div>

    </div>
  );
}
