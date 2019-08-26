const ul = document.querySelector('.todos');
const form = document.querySelector('.add-todo-form');

let todos = [];

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

    populateList(todos);
};

const populateList = (todosArr) => {
    for (let i=0; i < todosArr.length; i++) {
        // debugger
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');

        label.innerHTML = todosArr[i].text;

        let li = document.createElement('li');
        li.appendChild(input);
        li.appendChild(label);
        ul.appendChild(li);

    }
    todos = [];
    // debugger
};

form.addEventListener('submit', addTodo);