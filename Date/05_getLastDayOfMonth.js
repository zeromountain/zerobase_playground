const getLastDayOfMonth = (year, month) =>
  new Date(year, month + 1, 0).getDay();

module.exports = getLastDayOfMonth;
