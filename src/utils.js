/**
 * 태그 또는 카테고리의 이름이 중복되는 값인지 확인한다.
 * @param {string} name - 비교 대상 이름
 * @param {Tag[] | Category[]} array - 태그 또는 카테고리 목록의 배열
 * @return {boolean} - 중복이 되는지 안되는지에 대한 참/거짓 값을 반환한다.
 */
export function isDuplicated(name, array) {
  return array.some((item) => item === name);
}
