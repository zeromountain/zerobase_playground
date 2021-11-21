const sortBy = (todos, key) => todos.sort((a, b) => (a[key] > b[key] ? 1 : -1));

module.exports = sortBy;
