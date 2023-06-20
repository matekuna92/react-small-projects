import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TodoItem from "./TodoItem";
import './TodoList.css';
import Modal from "./Modal";
import {addNewTodoItem} from "../store/TodoActions";

const TodoList = () => {
    let todoStoreItems = useSelector(state => state.todoItems.todos.filter(todo => !todo.completed));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTodos, setNewTodos] = useState([]);
    const dispatch = useDispatch();

    const addNewTodo = () => {
        setIsModalOpen(true);
    }

    const createNewTodo = (newItem) => {
        console.log('newitem in todolist:', newItem);
        dispatch(addNewTodoItem(newItem));
       // console.log('updated todos:', todoStoreItems);
        setIsModalOpen(false);
    }

    useEffect(() => {
        console.log('current active todos: ', todoStoreItems)
    }, [todoStoreItems]);

    return (
        <>
            <button className='add-todo-button' onClick={addNewTodo}>Add ToDo</button>
            {isModalOpen && <Modal open={isModalOpen} onAddNewTodo={createNewTodo} />}
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