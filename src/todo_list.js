const ul = document.querySelector('.todos');
const form = document.querySelector('.add-todo-form');

const todos = [];

const addTodo = () => {

    const todoTask = document.querySelector('input[name=add-todo]').value;

    const todo = {
        text: todoTask,
        done: false
    };

    todos.push(todo);

    form.reset();

};

const populateList = () => {
    
};