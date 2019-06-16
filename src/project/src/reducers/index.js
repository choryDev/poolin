import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import SessionReducer from "./SessionReducer";
import HeaderReducer from "./HeaderReducer";
import ConfigReducer from "./ConfigReducer";

const reducers = combineReducers({
  form: formReducer,
  ConfigReducer, HeaderReducer, SessionReducer
});

export default reducers;