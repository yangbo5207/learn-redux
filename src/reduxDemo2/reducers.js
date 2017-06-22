import states from './state';
import { combineReducers } from 'redux';

function index(state = states.index, action) {
    switch (action.type) {
        case 'SWITCH_TAB':
            return action.index;
        default:
            return state;
    }
}

export default combineReducers({ index });
