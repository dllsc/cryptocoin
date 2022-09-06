import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BriefcaseActionCreators from '../store/action-creators/briefcase';

export const useBriefcaseActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(BriefcaseActionCreators, dispatch);
};