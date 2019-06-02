import {Map, List} from 'immutable';
import { CHANGEHEADERTITLE } from '../actions/def/HeaderType'

const init = new Map({
  headerMainTitle: 'My Dashboard',
});

const HeaderReducer = (state = init, actions) => {
    switch (actions.type){
      case CHANGEHEADERTITLE:
        return state.set('headerMainTitle', actions.title);
      default : return state;
    }
};

export default HeaderReducer;