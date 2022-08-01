import { Button } from './button/Button';

interface RowTableProps {
    rank: number;
    name: string;
    price: number;
    marketCap: number;
    vwap: number;
    supply: number;
    volume: number;
    buy: ()=>void;
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
            <td className={'table__cell'}>{rank}</td>
            <td className={'table__cell'}>{name}</td>
            <td className={'table__cell'}>{price}</td>
            <td className={'table__cell'}>{marketCap}</td>
            <td className={'table__cell'}>{vwap}</td>
            <td className={'table__cell'}>{supply}</td>
            <td className={'table__cell'}>{volume}</td>
            <td className={'table__cell'}>
                <Button onClick={()=>buy()}>Buy</Button>
            </td>
        </tr>
    );
};
