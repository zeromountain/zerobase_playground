const removeTodo = (todos, id) => todos.filter(todo => todo.id !== id);

module.exports = removeTodo;
