import {Map, List} from 'immutable';
import {DRAWER_OPEN, WORKSPACE, NOT_WORKSPACE} from '../actions/def/ConfigType'
const init = new Map({
  workspace: false,
  drawerOpen: false
});

const ConfigReducer = (state = init, actions) => {
    switch (actions.type){
      case WORKSPACE:
        return state.set('workspace', true);
      case NOT_WORKSPACE:
        return state.set('workspace', false);
      default : return state;
    }
};

export default ConfigReducer;