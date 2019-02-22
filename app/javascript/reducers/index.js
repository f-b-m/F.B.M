import { combineReducers } from 'redux';
import auths from './auth';
import menus from './menu';
import modals from './modal';

export default combineReducers({
  auths,
  menus,
  modals,
});
