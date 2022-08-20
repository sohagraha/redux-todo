import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes"

export const added = (todoText, color) => ({
    type: ADDED,
    payload: todoText,
    color: color
});

export const toggled = (todoId) => ({
    type: TOGGLED,
    payload: todoId,
});

export const colorSelected = (todoId, color) => ({
    type: COLORSELECTED,
    payload: {
        todoId,
        color
    }
});

export const deleted = (todoId) => ({
    type: DELETED,
    payload: todoId,
});

export const allCompleted = () => ({
    type: ALLCOMPLETED,
});

export const clearCompleted = () => ({
    type: CLEARCOMPLETED,
});


