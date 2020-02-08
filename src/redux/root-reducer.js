// All of the state of the application
// Combine states

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});