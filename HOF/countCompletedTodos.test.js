const countCompletedTodos = require('./08_countCompletedTodos');

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

test('todos 배열의 요소중 completed 프로퍼티 값이 true인 요소의 개수를 확인합니다.', () => {
  expect(countCompletedTodos(todos)).toBe(1);
});
