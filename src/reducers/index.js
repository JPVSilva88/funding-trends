import { combineReducers } from 'redux';
import page from './page';
import selectedCharity from './selectedCharity';
import selectedComparison from './selectedComparison';
import selectedYear from './selectedYear';
import bubbleExpand from './bubbleExpand';

const reducers = { page, selectedCharity, selectedComparison, selectedYear, bubbleExpand };
const combined = combineReducers(reducers);
export default combined;