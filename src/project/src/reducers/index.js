import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import HeaderReducer from "./HeaderReducer";
import ConfigReducer from "./ConfigReducer";

const reducers = combineReducers({
  form: formReducer,
  ConfigReducer,HeaderReducer
});

export default reducers;