import { RowTable } from "./RowTable";
import "./Table.scss";
import { oneCoinInfo } from "../../types/assets";
import { OneCoinCase } from '../../types/briefcase';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import { useBriefcaseActions } from '../../hooks/useBriefcaseActions';

interface TableProps {
  assets: oneCoinInfo[];
}

export const Table = ({ assets }: TableProps) => {
    const {speculationBriefcase} = useBriefcaseActions();
    const [activeModal, setActiveModal] = useState(false);
    const [currentValue, setCurrentValue] = useState('');
    const [currentCoin, setCurrentCoin] = useState<string>('');
    const buyCoin = (id: string)=>{
        const coin = assets.find(coin=>coin.id===id);
        const coinCase:OneCoinCase = {
            id,
            price: coin!.priceUsd,
            amount: currentValue,
        }
        speculationBriefcase(coinCase);
        setActiveModal(false);
    }
  return (
      <>
          <table className={'coins_table'}>
              <thead className={'coins_table-head'}>
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
                  <RowTable coin={coin} buy={()=>{setActiveModal(true);setCurrentCoin(coin.id)}} />
              ))}
              </tbody>
          </table>
          <Modal active={activeModal} setActive={setActiveModal}>
              <input type={'number'} onChange={(e)=>setCurrentValue(e.target.value)}/>
              <Button onClick={() => buyCoin(currentCoin)}>Buy</Button>
          </Modal>
      </>


  );
};
