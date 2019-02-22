import { combineReducers } from 'redux';
import BarsReducer from './bars_reducer';
import BarDataReducer from './bar_data_reducer';

const rootReducer = combineReducers({
  bars: BarsReducer,
  barData: BarDataReducer
});

export default rootReducer;
