import { combineReducers } from 'redux';
import increment from './increment';
import decrement from './decrement';

export default combineReducers({
  increment,
  decrement,
});
