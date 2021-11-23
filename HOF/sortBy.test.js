// const sortBy = require('./03_sortBy');
// sort → key의 값이 숫자 혹은 문자이기 때문에 크기를 비교해라
// 항상 매개 변수 이름은 의미있게 짓는다 👊 a, b와 같은 의미 없는 이름을 사용하지 말자 😱
// sort 메서드는 원본 배열을 바꾸는 mutator 메서드이기 때문에, 원본 배열을 복사해서 사용한다 💡
// sort 함수의 구현체,, sort 함수 내부의 this는 sort 함수를 호출하는 객체

const sortBy = (todos, key) =>
  [...todos].sort((todo1, todo2) =>
    todo1[key] > todo2[key] ? 1 : todo1[key] < todo2[key] ? -1 : 0,
  );

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

test('todos 배열을 id 프로퍼티를 기준으로 정렬합니다.', () => {
  expect(sortBy(todos, 'id')).toStrictEqual([
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false },
  ]);
});
test('todos 배열을 content 프로퍼티를 기준으로 정렬합니다.', () => {
  expect(sortBy(todos, 'content')).toStrictEqual([
    { id: 1, content: 'Javascript', completed: false },
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
  ]);
});
test('todos 배열을 completed 프로퍼티를 기준으로 정렬합니다.', () => {
  expect(sortBy(todos, 'completed')).toStrictEqual([
    { id: 1, content: 'Javascript', completed: false },
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
  ]);
});
