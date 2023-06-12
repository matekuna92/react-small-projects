import React from 'react';

import TodoItem from "./TodoItem";
import './TodoList.css';

const TodoList = (props) => {
    const todos = props.todos;

    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    title={todo.title}
                    desc={todo.desc}
                    image={todo.image}
                />
            ))}
        </ul>
    );
}

export default TodoList;