import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import TodoItem from "./TodoItem";

const CompletedTodos = () => {
    const todoStoreItems = useSelector(state => state.todoItems.todos.filter(todo => todo.completed));

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

export default CompletedTodos;