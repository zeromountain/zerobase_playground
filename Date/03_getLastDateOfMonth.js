const getLastDateOfMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

module.exports = getLastDateOfMonth;
