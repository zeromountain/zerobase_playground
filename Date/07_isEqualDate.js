const isEqualDate = (date1, date2) =>
  date1.getTime() === date2.getTime() ? true : false;

module.exports = isEqualDate;
