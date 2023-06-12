import React from 'react';

const initialState = {
    todos: [
        {
            'id': 0,
            'title': 'Learn React',
            'desc': 'First task is to learn React framework, so you can develop in this awesome library',
            'image': '../assets/react.jpg'
        },
        {
            'id': 1,
            'title': 'Buy coffee and sugar',
            'desc': 'Second task is to buy coffee and sugar, so you can sleep less and code more',
            'image': '../assets/coffee.jpg'
        },
        {
            'id': 2,
            'title': 'Go for a walk',
            'desc': 'Third task is to stand up a bit from your computer, because walking is good for your health. You can code later.',
            'image': '../assets/walk.jpg'
        }
    ]
};

const todosReducer = (state, action) => {
    switch (action.type) {
        case 'COMPLETE_TODO': {
            console.log('state: ', state);
            return state;
        }
        default: return initialState;
    } 
};

export default todosReducer;



