import React from 'react';
import Todo from './todo/Todo';
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const filter = useSelector(state => state.filter);
    return (
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {/* <!-- todo --> */}
            {
                todos.filter((todo) => {
                    const { status } = filter;
                    switch (status) {
                        case 'Complete':
                            return todo.completed;
                        case 'Incomplete':
                            return !todo.completed;
                        default:
                            return true;
                    }
                })
                    .filter((todo) => {
                        const { colors } = filter;
                        if (colors.length === 0) {
                            return true;
                        }
                        return colors.includes(todo?.color);
                    })
                    .map(todo => (
                        <Todo key={todo.id} todo={todo} />
                    ))
            }

        </div>
    );
};

export default TodoList;