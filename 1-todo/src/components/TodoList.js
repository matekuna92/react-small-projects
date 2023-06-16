import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import TodoItem from "./TodoItem";
import './TodoList.css';
import Modal from "./Modal";

const TodoList = () => {
    const todoStoreItems = useSelector(state => state.todoItems.todos.filter(todo => !todo.completed));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const addNewTodo = () => {
        setIsModalOpen(true);
    }

    return (
        <>
            <button className='add-todo-button' onClick={addNewTodo}>Add ToDo</button>
            {isModalOpen && <Modal open={isModalOpen} />}
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
        </>
    );
}

export default TodoList;