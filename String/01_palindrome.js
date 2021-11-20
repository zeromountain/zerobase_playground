function isPalindrome(s) {
  const expression = s.toLowerCase().replace(/[^0-9a-z]/g, '');
  return expression === expression.split('').reverse().join('');
}

module.exports = isPalindrome;
