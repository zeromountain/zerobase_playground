const toggleCompletedAll = todos =>
  todos.map(todo => ({ ...todo, completed: true }));

module.exports = toggleCompletedAll;
