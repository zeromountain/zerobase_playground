const compress = require('./07_compress');

test(`'ABBCCCE' 중복된 문자의 개수를 파악해 문자열을 압축하면?`, () => {
  expect(compress('ABBCCCE')).toBe('AB2C3E');
});
test(`'APPLE' 중복된 문자의 개수를 파악해 문자열을 압축하면?`, () => {
  expect(compress('APPLE')).toBe('AP2LE');
});
test(`'GOOGLE' 중복된 문자의 개수를 파악해 문자열을 압축하면?`, () => {
  expect(compress('GOOGLE')).toBe('GO2GLE');
});
test(`'GEEGEEGEEGEE' 중복된 문자의 개수를 파악해 문자열을 압축하면?`, () => {
  expect(compress('GEEGEEGEEGEE')).toBe('GE2GE2GE2GE2');
});
