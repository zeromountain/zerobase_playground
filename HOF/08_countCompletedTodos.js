const countCompletedTodos = todos =>
  todos.filter(todo => !!todo.completed).length;

module.exports = countCompletedTodos;
