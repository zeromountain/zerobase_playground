const diffDays = (date1, date2) =>
  Math.abs(date2.getTime() - date1.getTime()) / (24 * 3600 * 1000);

module.exports = diffDays;
