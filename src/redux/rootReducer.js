import {combineReducers} from 'redux';
import NavigationReducer from './Navigation/reducer';

const rootReducer = combineReducers({
  navigation: NavigationReducer
});

export default rootReducer;
