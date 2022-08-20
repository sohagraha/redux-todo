import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes";
import { initialState } from "./initialState";

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: state.length + 1,
                    text: action.payload,
                    completed: false,
                    color: 'green'
                }
            ];
        case TOGGLED:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            });
        case COLORSELECTED:
            return state.map(todo => {
                if (todo.id === action.payload.todoId) {
                    return {
                        ...todo,
                        color: action.payload.color
                    };
                }
                return todo;
            });
        case DELETED:
            return state.filter(todo => todo.id !== action.payload);
        case ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                };
            });
        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
}

export default todosReducer;
