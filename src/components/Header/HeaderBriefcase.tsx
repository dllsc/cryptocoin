import { useTypedSelector } from "../../hooks/useTypesSelector";
import React, { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";
import { oneCoinInfo } from "../../types/assets";
import { calculateBalance } from "../../utils/calculateBalance";
import { getCoinsOnBriefcase } from "../../utils/getCoinsOnBriefcase";
import { useBriefcaseActions } from "../../hooks/useAssetsActions";
import { Button } from "../Button/Button";
import { formatCurrency } from "../../utils/formatCurrency";

export const HeaderBriefCase = () => {
  const { coinsPriceAtTimeBuying } = useTypedSelector(
    (state) => state.briefcase
  );
  const { assets, loading } = useTypedSelector((state) => state.assets);

  const { deleteCoinBriefcase } = useBriefcaseActions();
  const [briefcase, setBriefCase] = useState({
    balance: 0,
    profit: { number: 0, percent: 0 },
  });

  const [entryCoins, setEntryCoins] = useState<oneCoinInfo[]>([]);

  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (assets.length > 0) {
      setBriefCase(calculateBalance({ coinsPriceAtTimeBuying, assets }));
      setEntryCoins(getCoinsOnBriefcase({ coinsPriceAtTimeBuying, assets }));
    }
  }, [loading, coinsPriceAtTimeBuying]);

  const deleteCoin = (id: string) => {
    deleteCoinBriefcase(id);
    localStorage.setItem("briefcase", JSON.stringify(coinsPriceAtTimeBuying));
  };

  const isPlus = briefcase.profit.number > 0 ? "+" : "";

  return (
    <>
      <div
        className={"header-card header-card-briefcase"}
        onClick={() => setModalActive(true)}
      >
        <span className={"header-card-briefcase-profit"}>{`${formatCurrency(
          briefcase.balance
        )} USD`}</span>
        <span className={"header-card-briefcase-profit"}>
          {isPlus + formatCurrency(briefcase.profit.number)}$ (
          {`${isPlus + formatCurrency(briefcase.profit.percent)}%)`}
        </span>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <table>
          {entryCoins.length > 0
            ? entryCoins.map(({ id, name }) => (
                <tr key={id}>
                  <th>{name}</th>
                  <th>
                    <Button type={"delete"} onClick={() => deleteCoin(id)}>
                      Remove Coin
                    </Button>
                  </th>
                </tr>
              ))
            : "You don't have coins"}
        </table>
      </Modal>
    </>
  );
};
