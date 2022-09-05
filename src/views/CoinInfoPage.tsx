import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypesSelector';

export const CoinInfoPage = () => {

  const { coinId } = useParams();

  const { assets } = useTypedSelector((state) => state.assets);

  const coin = assets.find(a => a.id === coinId);

  if (!coin){
    return <>Такой страницы не существует</>
  }
  return <>{coin.name}</>;
};
