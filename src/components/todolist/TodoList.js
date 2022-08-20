import React from 'react';
import Todo from './todo/Todo';
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    return (
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {/* <!-- todo --> */}
            {
                todos.map(todo => (
                    <Todo key={todo.id} todo={todo} />
                ))
            }

        </div>
    );
};

export default TodoList;