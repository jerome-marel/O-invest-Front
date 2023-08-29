// store.js
import { createStore, combineReducers } from 'redux';

// Actions
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Action creators
export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });

// Reducer
const authReducer = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  isAuthenticated: authReducer,
});

const store = createStore(rootReducer);

export default store;
