const diffDays = (date1, date2) =>
  // Math.abs(date2.getTime() - date1.getTime()) / (24 * 3600 * 1000);
  Math.abs(date1 - date2) / (24 * 60 * 60 * 1000); // 절대값을 통해서 음수인 경우를 고려한다

module.exports = diffDays;
