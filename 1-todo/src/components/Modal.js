import React, {useRef, useState} from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './Modal.css';
import Backdrop from "./Backdrop";
import { useSelector } from "react-redux";

const Modal = (props) => {
    let todoStoreItems = useSelector(state => state.todoItems.todos);
    let open = props.open;
    const titleRef = useRef();
    const descRef = useRef();
    const storeItemsLength = todoStoreItems.length;


    const addNewTodo = () => {
        const title = titleRef.current.value;
        const desc = descRef.current.value;

        const newTodo = {
            id: storeItemsLength + 1,
            title,
            desc,
            completed: false
        };

        props.onAddNewTodo(newTodo);
    }

    const closeModal = () => {
        open = false;
    }

    return (
        <>
        <Backdrop />
        <div className='modal'>
           <div className='modal-header'>
               <h2>Add new Todo</h2>
              <FontAwesomeIcon icon={faTimes} onClick={closeModal} />
            </div>
            <div className='modal-body'>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' ref={titleRef}/>
                <label htmlFor='description'>Description</label>
                <input type='textarea' id='description' ref={descRef} />
            </div>
            <div className='modal-footer'>
                <button className='modal-add-button' onClick={addNewTodo}>Add</button>
                <button className='modal-cancel-button' onClick={closeModal}>Cancel</button>
            </div>
        </div>
        </>
        );
}

export default Modal;