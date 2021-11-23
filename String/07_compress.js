/**
 * @type { (str: string) => string}
 */
const compress = str => {
  return str.replace(/(\D)\1*/g, s =>
    s.length === 1 ? s[0] : s[0] + s.length,
  );
};
// /(.)\1+/g/ → 캡처된 문자가 하나 이상 반복되는 문자를 잡아낸다

module.exports = compress;
