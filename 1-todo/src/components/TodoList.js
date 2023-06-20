import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TodoItem from "./TodoItem";
import './TodoList.css';
import Modal from "./Modal";
import {addNewTodoItem} from "../store/TodoActions";

const TodoList = () => {
    let todoStoreItems = useSelector(state => state.todoItems.todos.filter(todo => !todo.completed));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const createNewTodo = (newItem) => {
        console.log('newitem in todolist:', newItem);
        dispatch(addNewTodoItem(newItem));
       // console.log('updated todos:', todoStoreItems);    // logging only the 2 default todo items
        setIsModalOpen(false);
    }

    useEffect(() => {
        console.log('current active todos: ', todoStoreItems)   // logging the current state when the array changes
    }, [todoStoreItems]);

    return (
        <>
            <button className='add-todo-button' onClick={toggleModal}>Add ToDo</button>
            {isModalOpen && <Modal open={isModalOpen} onAddNewTodo={createNewTodo} toggleModal={toggleModal} />}
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