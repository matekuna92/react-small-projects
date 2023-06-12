import React from 'react';

import Card from "../ui/Card";
import './TodoItem.css';

const TodoItem = (props) => {
    return (
        <Card>
            <li className='todo-item'>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <img src={props.image} alt={props.title} />
            </li>
        </Card>
    );
}

export default TodoItem;