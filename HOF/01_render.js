const render = todos =>
  todos.reduce(
    (acc, todo) =>
      (acc += `
        <li id="${todo.id}">
          <label><input type="checkbox"${todo.completed ? ' checked' : ''}>${
        todo.content
      }</label>
        </li>`),
    '',
  );

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

console.log(render(todos));
