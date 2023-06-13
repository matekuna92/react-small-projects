import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from "./TodoItem";
import './TodoList.css';

const TodoList = (props) => {
  //  const todos = props.todos;
    const todoStoreItems = useSelector(state => state.todoItems.todos.filter(todo => !todo.completed));

    return (
        <ul className='todo-list'>
            {todoStoreItems.map(todo => (
                <TodoItem
                    id={todo.id}
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