const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

let todos = [];

// Function to add a new todo to the list
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

// Function to remove a todo from the list
function removeTodo(todoIndex) {
  todos.splice(todoIndex, 1);
  displayTodos();
}

// Function to toggle the status of a todo between complete and incomplete
function toggleTodoStatus(todoIndex) {
  todos[todoIndex].complete = !todos[todoIndex].complete;
  displayTodos();
}

// Function to display all the todos in the list
function displayTodos() {
  todoList.innerHTML = '';
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const todoItem = document.createElement('li');
    const todoCheck = document.createElement('input');
    todoCheck.type = 'checkbox';
    todoCheck.checked = todo.complete;
    todoCheck.addEventListener('change', function() {
      toggleTodoStatus(i);
    });
    const todoText = document.createElement('span');
    todoText.textContent = todo.text;
    if (todo.complete) {
      todoText.style.textDecoration = 'line-through';
      const todoRemove = document.createElement('button');
      todoRemove.textContent = 'Remove';
      todoRemove.addEventListener('click', function() {
        removeTodo(i);
      });
      todoItem.appendChild(todoRemove);
    }
    todoItem.appendChild(todoCheck);
    todoItem.appendChild(todoText);
    todoList.appendChild(todoItem);
  }
}

// Event listener for the todo form submission
todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText) {
    addTodo({
      text: todoText,
      complete: false,
    });
    todoInput.value = '';
  }
});
