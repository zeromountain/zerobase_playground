//
// const getMaxId = todos =>
//   todos.reduce((acc, todo) => (acc > todo.id ? acc : todo.id), 0);

// 빈배열을 스프레드하면 아무것도 없다.
// Math.max() → -Infinity
const getMaxId = todos => Math.max(...todos.map(todo => todo.id), 0);
// todos.length ? Math.max(...todos.map(todo => todo.id)) : 0;

module.exports = getMaxId;
