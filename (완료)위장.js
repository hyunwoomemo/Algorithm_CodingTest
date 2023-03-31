function solution(clothes) {
  // 종류와 종류의 갯수로 나눔
  let newArr = clothes.map((v) => [v[1], clothes.filter((v1) => v1[1] === v[1]).length]);
  console.log(newArr);
  // 이차배열의 중복제거와 종류의 갯수로만 구성된 배열 만들기
  let uniqueArr = [...new Set(newArr.join('|').split('|'))].map((v) => v.split(',')).map((v) => Number(v[1]));
  console.log(uniqueArr);

  // 경우의 수

  let result = 1;
  for (let i = 0; i < uniqueArr.length; i++) {
    result *= uniqueArr[i]+1;
  }

  return result - 1;
}

solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]);