const addTodo = require('./04_addTodo');

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

test('기존 todos 배열에 새로운 todo 요소를 추가합니다.', () => {
  expect(
    addTodo(todos, { id: 4, content: 'Test', completed: false }),
  ).toStrictEqual([
    { id: 4, content: 'Test', completed: false },
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false },
  ]);
});
