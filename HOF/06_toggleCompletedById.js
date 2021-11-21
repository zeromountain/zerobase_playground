const toggleCompletedById = (todos, id) =>
  todos.map(todo => {
    return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
  });

console.log(
  toggleCompletedById(
    [
      { id: 3, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 1, content: 'Javascript', completed: false },
    ],
    2,
  ),
);

module.exports = toggleCompletedById;
