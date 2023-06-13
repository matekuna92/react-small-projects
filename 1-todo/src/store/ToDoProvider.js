import React from 'react';

const initialState = {
    todos: [
        {
            'id': 0,
            'title': 'Learn React',
            'desc': 'First task is to learn React framework, so you can develop in this awesome library',
            'image': '../assets/react.jpg',
            'completed': true
        },
        {
            'id': 1,
            'title': 'Buy coffee and sugar',
            'desc': 'Second task is to buy coffee and sugar, so you can sleep less and code more',
            'image': '../assets/coffee.jpg',
            'completed': false
        },
        {
            'id': 2,
            'title': 'Go for a walk',
            'desc': 'Third task is to stand up a bit from your computer, because walking is good for your health. You can code later.',
            'image': '../assets/walk.jpg',
            'completed': false
        }
    ]
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COMPLETE_TODO': {
            const todoIndex = state.todos.findIndex(todo => todo.id === action.todoId);
            const newCompleted = state.todos[todoIndex].completed = true;
            const updatedTodos = [...state.todos];

            updatedTodos[todoIndex] = {
                ...state.todos[todoIndex],
                completed: newCompleted
            }

            return {
                ...state,
                todos: updatedTodos
            }

        }
        case 'EDIT_TODO': {
            console.log('edit:');

            return state;
        }
        case 'DELETE_TODO': {
            console.log('delete:');

            return state;
        }
        default: return initialState;
    } 
};

export default todosReducer;



