// const addTodo = require('./04_addTodo');
// worst ๐ฑ โ ์๋ณธ ๋ฐฐ์ด์ ๋ณ๊ฒฝํ๋ค
// const addTodo = (todos, newTodo) => todos.push(newTodo)
// best ๐ โ ์๋ณธ ๋ฐฐ์ด์ ๋ณต์ฌํด ์ฌ์ฉ
const addTodo = (todos, newTodo) => [newTodo, ...todos];

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

test('๊ธฐ์กด todos ๋ฐฐ์ด์ ์๋ก์ด todo ์์๋ฅผ ์ถ๊ฐํฉ๋๋ค.', () => {
  expect(
    addTodo(todos, { id: 4, content: 'Test', completed: false }),
  ).toStrictEqual([
    { id: 4, content: 'Test', completed: false },
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false },
  ]);
});
