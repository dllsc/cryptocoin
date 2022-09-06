import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AssetsActionCreators from '../store/action-creators/assets'

export const useAssetsActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AssetsActionCreators, dispatch);
};

