import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ConfigReducer from "./ConfigReducer";

const reducers = combineReducers({
  form: formReducer,
  ConfigReducer
});

export default reducers;