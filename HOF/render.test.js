// const render = require('./01_render');

/*
const render = todos => {
  let html = '';

  todos.forEach(todo => {
    html += `<li id="${todo.id}"><label><input type="checkbox" ${
      todo.completed ? 'checked' : ''
    }/>${todo.content}</label></li>`;
  });

  return html;
};
  🤔 html 변수가 꼭 필요한 변수인가?
  🤔 forEach 부수효과 발생
*/

/*
const render = todos =>
  todos.reduce(
    (html, todo) =>
      (html += `<li id="${todo.id}"><label><input type="checkbox" ${
        todo.completed ? 'checked' : ''
      }/>${todo.content}</label></li>`),
    '',
  );
*/

/*
const render = todos =>
  todos
    .map(
      {id, content, completed} =>
        `<li id="${id}"><label><input type="checkbox" ${
          completed ? 'checked' : ''
        }>${content}</label></li>`,
    ).join('');
    
*/
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

test('할 일 목록을 HTML 엘리먼트로 반환해야합니다.', () => {
  expect(render(todos)).toBe(`
  <li id="3">
    <label><input type="checkbox">HTML</label>
  </li>
  <li id="2">
    <label><input type="checkbox" checked>CSS</label>
  </li>
  <li id="1">
    <label><input type="checkbox">Javascript</label>
  </li>`);
});
