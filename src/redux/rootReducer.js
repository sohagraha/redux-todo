import todosReducer from './todos/todosReducer';
import folterReducer from './filter/filterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos: todosReducer,
    filter: folterReducer
})

export default rootReducer;