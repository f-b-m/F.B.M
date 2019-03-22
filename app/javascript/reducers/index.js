import { combineReducers } from 'redux';
import auths from './auth';
import drills from './drill';
import drillForm from './drillFrom';
import modals from './modal';

const rootReducer = combineReducers({
  auths,
  drills,
  drillForm,
  modals,
});

export default rootReducer;
