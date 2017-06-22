import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
import states from './state';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = states.visibilityFilter, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = states.todos, action) {
    switch (action.type) {
        case ADD_TODO:
             return [ ...state, {
                 text: action.type,
                 completed: false
             }];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return
            });
        default:
            return state;
    }
}

const todoApp = combineReducers({ visibilityFilter, todos });

export default todoApp;