const COMPLETE_TODO = 'COMPLETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const DELETE_TODO = 'DELETE_TODO';

const completeTodo = (id) => {
    return { type: COMPLETE_TODO, todoId: id };
}

const editTodo = (id) => {
    return { type: EDIT_TODO, todoId: id };
}

const deleteTodo = (id) => {
    return { type: DELETE_TODO, todoId: id };
}

export {
    COMPLETE_TODO, EDIT_TODO, DELETE_TODO,
    completeTodo, editTodo, deleteTodo
}