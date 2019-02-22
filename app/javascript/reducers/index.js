import { combineReducers } from 'redux';
import auths from './auth';
import menus from './menu';
import modals from './modal';

const rootReducer = combineReducers({
  auths,
  menus,
  modals,
});

export default rootReducer;
