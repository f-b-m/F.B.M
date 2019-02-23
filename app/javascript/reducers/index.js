import { combineReducers } from 'redux';
import auths from './auth';
import menus from './menu';
import menuForm from './menuFrom';
import modals from './modal';

const rootReducer = combineReducers({
  auths,
  menus,
  menuForm,
  modals,
});

export default rootReducer;
