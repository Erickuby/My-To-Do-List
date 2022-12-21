const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', event => {
  // prevent form from submitting and refreshing the page
  event.preventDefault();

  // create a new list item for the task
  const task = document.createElement('li');
  task.innerHTML = `
    <input type="checkbox">
    <label>${input.value}</label>
    <button class="delete">Delete</button>
  `;

  // append the new task to the task list
  taskList.appendChild(task);

  // clear the input field
  input.value = '';
});

taskList.addEventListener('click', event => {
  if (event.target.className === 'delete') {
    // remove the parent list item of the delete button that was clicked
    event.target.parentElement.remove();
  }
});
