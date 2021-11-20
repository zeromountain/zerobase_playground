const toggleCase = require('./06_toggleCase');

test(`'StuDY' 문자의 대소문자를 바꾸면?`, () => {
  expect(toggleCase('StuDY')).toBe('sTUdy');
});
test(`'FrontEnd' 문자의 대소문자를 바꾸면?`, () => {
  expect(toggleCase('FrontEnd')).toBe('fRONTeND');
});
test(`'NaverLineKaKaoCouPangBaeMin' 문자의 대소문자를 바꾸면?`, () => {
  expect(toggleCase('NaverLineKaKaoCouPangBaeMin')).toBe(
    'nAVERlINEkAkAOcOUpANGbAEmIN',
  );
});
test(`'SonYeongSan' 문자의 대소문자를 바꾸면?`, () => {
  expect(toggleCase('SonYeongSan')).toBe('sONyEONGsAN');
});
test(`'Iamplayingsoccer' 문자의 대소문자를 바꾸면?`, () => {
  expect(toggleCase('Iamplayingsoccer')).toBe('iAMPLAYINGSOCCER');
});
