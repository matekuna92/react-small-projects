import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './Modal.css';
import Backdrop from "./Backdrop";

const Modal = (props) => {
    return (
        <>
        <Backdrop />
        <div className='modal'>
           <div className='modal-header'>
               <h2>Add new Todo</h2>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className='modal-body'>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title'/>
                <label htmlFor='description'>Description</label>
                <input type='textarea' id='description' />
            </div>
            <div className='modal-footer'>
                <button className='modal-add-button'>Add</button>{' '}
                <button className='modal-cancel-button'>Cancel</button>
            </div>
        </div>
        </>
        );
}

export default Modal;