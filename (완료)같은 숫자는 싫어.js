function solution(arr) {
  // 연속된 인덱스의 중복값 제거
  let result = arr.filter((v, i, arr) => arr[i] !== arr[i + 1]);

  return result;
}

solution([1, 1, 3, 3, 0, 1, 1]);

const array = ['0', 1, 2, '0', '0', 3]

const filterArr = array.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  [],
)

console.log(filterArr);

