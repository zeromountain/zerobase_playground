const getValues = (todos, key) => todos.map(todo => todo[key]); // [] → 프로퍼티 키 평가

module.exports = getValues;
