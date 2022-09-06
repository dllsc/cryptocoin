import { oneCoinInfo } from '../types/assets';
import { OneCoinCase } from '../types/briefcase';

interface getCoinsOnBriefcaseProps{
    coinsPriceAtTimeBuying: OneCoinCase[],
    assets: oneCoinInfo[]
}
export const getCoinsOnBriefcase = ({coinsPriceAtTimeBuying, assets}:getCoinsOnBriefcaseProps)=>{
    const entryCoins: oneCoinInfo[] = [];
    const uniqIdCoinsInBriefcase = new Set(
        coinsPriceAtTimeBuying.map((c) => c.id)
    );
    uniqIdCoinsInBriefcase.forEach((id) => {
        const coin = assets.find((coin) => coin.id === id);
        entryCoins.push(coin!);
    });
    return entryCoins;
}