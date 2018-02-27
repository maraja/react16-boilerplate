import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import authentication from './authenticationReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	authentication,
  fuelSavings,
  routing: routerReducer
});

export default rootReducer;
