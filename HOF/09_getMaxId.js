const getMaxId = todos =>
  todos.reduce((acc, todo) => (acc > todo.id ? acc : todo.id), 0);

module.exports = getMaxId;
