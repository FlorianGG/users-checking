import { combineReducers } from 'redux';

import ActiveUserReducer from './reducer_activeUser';
import UsersReducer from './reducer_users';

const rootReducer = combineReducers({
  users: UsersReducer,
  activeUser: ActiveUserReducer,
})

export default rootReducer
