/**
 * 아이디의 길이는 3자 이상 15자 이하여야 합니다.
 * 아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
 * 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.
 *
 * [제한사항]
 *  new_id는 길이 1 이상 1,000 이하인 문자열입니다.
 *  new_id는 알파벳 대문자, 알파벳 소문자, 숫자, 특수문자로 구성되어 있습니다.
 *  new_id에 나타날 수 있는 특수문자는 -_.~!@#$%^&*()=+[{]}:?,<>/ 로 한정됩니다.
 *
 * @param newId {string}
 * @returns {string}
 */
/**
 * 1단계 → 소문자로 치환
 * 2단계 → !, @, #, * 문자 제거
 * 3단계 → '...', '..'를 '.'로 변경
 * 4단계 → 첫단어에 '.' 제거
 * 5단계 → 빈 문자열이면 a로
 * 6단계 → ID의 길이 15자
 * 7단계 → ID의 길이 2이하이면 마지막 문자 추가
 */

function recommendId(newId) {
  const recommended = newId
    .toLowerCase()
    .replace(/[^\w\-\.]/g, '') // 모든 문자와 마침표(.)를 제외하고 공백 처리
    .replace(/\.+/g, '.') // 1개이상의 모든 마침표(.)를 마침표 하나로 처리
    .replace(/^\.|\.$/g, '') // 첫 문자에 마침표가 있거나 문자의 끝 문자에 마침표가 있으면 공백 처리
    .replace(/^$/, 'a') // 문자가 없는 경우 a로 처리
    .slice(0, 15) // 문자열의 길이를 15까지 제한
    .replace(/\.$/, ''); // 문자열의 마지막에 마침표가 있으면 공백 처리
  return recommended.length > 2
    ? recommended
    : recommended.padEnd(3, recommended[recommended.length - 1]); // 문자열의 길이가 2보다 작으면 마지막 문자열을 추가
}

module.exports = recommendId;
