const COMPLETE_TODO = 'COMPLETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const DELETE_TODO = 'DELETE_TODO';
const ADD_NEW_TODO_ITEM = 'ADD_NEW_TODO';

const completeTodo = (id) => {
    return { type: COMPLETE_TODO, todoId: id };
}

const editTodo = (id) => {
    return { type: EDIT_TODO, todoId: id };
}

const deleteTodo = (id) => {
    return { type: DELETE_TODO, todoId: id };
}

const addNewTodoItem = (newItem) => {
    return { type: ADD_NEW_TODO_ITEM, newItem: newItem };
}

export {
    COMPLETE_TODO, EDIT_TODO, DELETE_TODO, ADD_NEW_TODO_ITEM,
    completeTodo, editTodo, deleteTodo, addNewTodoItem
}