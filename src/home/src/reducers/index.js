import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// comm
import HeaderReducer from "./HeaderReducer";

const reducers = combineReducers({
  form: formReducer,
  HeaderReducer
});

export default reducers;