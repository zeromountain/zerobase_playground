const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

module.exports = getFirstDayOfMonth;
