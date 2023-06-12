import React from 'react';

import Card from "../ui/Card";
import './TodoItem.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {
    const todoEditHandler = () => {
        console.log('edit');
    }

    const todoDeleteHandler = (id) => {
        console.log('delete');
    }

    return (
        <Card>
            <li className='todo-item'>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <img src={props.image} alt={props.title} />
                <div className='todo-item-actions'>
                    <FontAwesomeIcon icon={faEdit} onClick={todoEditHandler} style={{ color: 'blue', cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faTrash} onClick={todoDeleteHandler} style={{ color: 'red', cursor: 'pointer' }} />
                </div>
            </li>
        </Card>
    );
}

export default TodoItem;