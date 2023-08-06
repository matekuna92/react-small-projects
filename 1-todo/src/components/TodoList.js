import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TodoItem from "./TodoItem";
import './TodoList.css';
import Modal from "./Modal";
import {addNewTodoItem} from "../store/TodoActions";

const TodoList = () => {
    let todoStoreItems = useSelector(state => state.todoItems.todos.filter(todo => !todo.completed));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTodoEdited, setIsTodoEdited] = useState(false);
    const [editedItem, setEditedItem] = useState(null);
    const dispatch = useDispatch();

    const toggleModal = (isEdited) => {
        setIsTodoEdited(isEdited);
        setIsModalOpen(!isModalOpen);
    }

    const createNewTodo = (newItem) => {
        toggleModal(false);
        console.log('newitem in todolist:', newItem);
        dispatch(addNewTodoItem(newItem));
       // console.log('updated todos:', todoStoreItems);    // logging only the 2 default todo items
        setIsModalOpen(false);
    }

    const editTodo = (todo, updates) => {
        console.log('todo and updates: \n', todo, updates);
        setEditedItem({
          ...todo,
          ...updates
        });
      
        toggleModal(true);
        console.log('todo after setEditedItem: ', todo);
      };

    const handleAddButtonClick = () => {
        toggleModal(false);
      };

    useEffect(() => {
        console.log('current active todos: ', todoStoreItems)   // logging the current state when the array changes
    }, [todoStoreItems]);

    return (
        <>
            <button className='add-todo-button' onClick={handleAddButtonClick}>Add ToDo</button>
            {isModalOpen && <Modal open={isModalOpen}
                onAddNewTodo={createNewTodo}
                toggleModal={toggleModal}
                edited={isTodoEdited}
                editedItem={editedItem}
                onEditTodo={editTodo}
            />}
            <ul className='todo-list'>
                {todoStoreItems.map(todo => (
                    <TodoItem
                        id={todo.id}
                        key={todo.id}
                        title={editedItem != null ? editedItem.title : todo.title}
                        desc={editedItem != null ? editedItem.desc : todo.desc}
                        image={todo.image}
                        onTodoEdit={() => editTodo(todo)}
                    />
                ))}
            </ul>
        </>
    );
}

export default TodoList;