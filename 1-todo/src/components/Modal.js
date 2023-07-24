import React, {useRef, useState} from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './Modal.css';
import Backdrop from "./Backdrop";
import { useSelector } from "react-redux";

const Modal = (props) => {
    let todoStoreItems = useSelector(state => state.todoItems.todos);
    const titleRef = useRef();
    const descRef = useRef();
    const maxId = todoStoreItems.reduce((max, todo) => {
        return todo.id > max ? todo.id : max;
      }, 0);

    const isEditing = props.edited;
    const { title, desc } = props.editedItem || {};

    const addNewTodo = () => {
        const title = titleRef.current.value;
        const desc = descRef.current.value;

        const newTodo = {
            id: maxId + 1,
            title,
            desc,
            completed: false
        };

        props.onAddNewTodo(newTodo);
    }

    const closeModal = () => {
        props.toggleModal();
    }

    const editTodo = () => {
        props.onEditTodo();
    }

    return (
        <>
        <Backdrop onClick={closeModal} />
        <div className='modal'>
           <div className='modal-header'>
               <h2>{isEditing ? 'Edit Todo' : 'Add new Todo'}</h2>
              <FontAwesomeIcon icon={faTimes} onClick={closeModal} />
            </div>
            <div className='modal-body'>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' ref={titleRef} value={title !=null ? title : props.title} />
                <label htmlFor='description'>Description</label>
                <input type='textarea' id='description' ref={descRef} value={desc !=null ? desc : props.desc} />
            </div>
            <div className='modal-footer'>
                <button className='modal-add-button' onClick={isEditing ? editTodo : addNewTodo}>{isEditing ? 'Edit' : 'Add'}</button>
                <button className='modal-cancel-button' onClick={closeModal}>Cancel</button>
            </div>
        </div>
        </>
        );
}

export default Modal;