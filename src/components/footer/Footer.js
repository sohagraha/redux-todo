import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statusChanged, colorChanged } from '../../redux/filter/actions';

const numberOfCompletedTodos = todos => {
    switch (todos) {
        case 0:
            return 'No Task'
        case 1:
            return '1 Task'
        default:
            return `${todos} Tasks`
    }
}

const Footer = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const filter = useSelector(state => state.filter);


    const todosRemaining = todos.filter(todo => !todo.completed).length;

    let { status, colors } = filter;

    const handleStatusChange = (status) => {
        dispatch(statusChanged(status));
    }

    const handleColorChange = (color) => {
        if (colors.includes(color)) {
            dispatch(colorChanged(color, 'removed'));
        } else {
            dispatch(colorChanged(color, 'added'));
        }
    }

    console.log(filter.colors);

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfCompletedTodos(todosRemaining)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status === 'All' && 'font-bold'}`} onClick={() => handleStatusChange("All")}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`} onClick={() => handleStatusChange("Incomplete")}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`} onClick={() => handleStatusChange("Complete")}>Complete</li>
                <li></li>
                <li></li>
                <li
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}
                    onClick={() => handleColorChange("green")}
                ></li>
                <li
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') ? 'bg-red-500' : null}`}
                    onClick={() => handleColorChange("red")}
                ></li>
                <li
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}
                    onClick={() => handleColorChange("yellow")}
                ></li>
            </ul>
        </div>
    );
};

export default Footer;