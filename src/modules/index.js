import { combineReducers } from 'redux';
import habits from './habits';

const rootReducer = combineReducers({
  habits,
});

//흩어져 있는 리듀서를 하나로 합쳐줍니다.

export default rootReducer;
