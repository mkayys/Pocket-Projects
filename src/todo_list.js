const ul = document.querySelector('.todos');
const form = document.querySelector('.add-todo-form');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

const addTodo = (e) => {
    e.preventDefault();

    // todos = [];
    // debugger
    const todoTask = document.querySelector('input[name=add-todo]').value;

    let todo = {
        text: todoTask,
        done: false
    };

    todos.push(todo);

    form.reset();

    localStorage.setItem('todos', JSON.stringify(todos));
    populateList(todos);

};

const populateList = (todos) => {

    if (ul.children) {
        let childArr = Array.from(ul.children);
        childArr.forEach(child => ul.removeChild(child));
    }

    for (let i=0; i < todos.length; i++) {
        // debugger
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');

        label.innerHTML = todos[i].text;

        let li = document.createElement('li');
        li.appendChild(input);
        li.appendChild(label);
        ul.appendChild(li);

    }
    // todos = [];
};

const handleClick = (e) => {
    e.preventDefault();
    
}

form.addEventListener('submit', addTodo);
ul.addEventListener('click', handleClick);
populateList(todos);