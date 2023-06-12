import React from 'react';

import Card from "../ui/Card";
import './TodoItem.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {

    const todoCompleteHandler = (todoitem) => {
props.onCompleteTodo(todoitem);
    }

    const todoEditHandler = () => {

    }

    const todoDeleteHandler = (id) => {

    }

    return (
        <Card>
            <li className='todo-item'>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <img src={props.image} alt={props.title} />
                <div className='todo-item-actions'>
                    <FontAwesomeIcon icon={faCheck} onClick={todoCompleteHandler} style={{ color: 'green', cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faEdit} onClick={todoEditHandler} style={{ color: 'blue', cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faTrash} onClick={todoDeleteHandler} style={{ color: 'red', cursor: 'pointer' }} />
                </div>
            </li>
        </Card>
    );
}

export default TodoItem;