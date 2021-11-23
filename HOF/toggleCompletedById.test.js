// const toggleCompletedById = require('./06_toggleCompletedById');
/*
  → todos 배열을 바꾼다

const toggleCompletedById = (todos, id) =>
  todos.map(todo => {
    return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
  });
*/

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

test('todos 배열에서 id가 2인 요소의 copleted 프로퍼티 값을 반전합니다.', () => {
  expect(toggleCompletedById(todos, 2)).toStrictEqual([
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 1, content: 'Javascript', completed: false },
  ]);
});
