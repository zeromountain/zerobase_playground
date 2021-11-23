// !! 사용하지 않아도 completed 값 자체가 true/false이기 때무넹 !! 사용하지 않아도된다.
const countCompletedTodos = todos =>
  todos.filter(todo => !!todo.completed).length;

module.exports = countCompletedTodos;
