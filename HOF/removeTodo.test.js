let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const removeTodo = (todos, id) => todos.filter(todo => todo.id !== id);

test('todos 배열에서 id가 2인 todo를 삭제합니다.', () => {
  expect(removeTodo(todos, 2)).toStrictEqual([
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false },
  ]);
});
