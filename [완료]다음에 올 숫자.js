function solution(common) {
  let answer = 0;

  const newArr = common.map((v, i, arr) => arr[i + 1] - arr[i]).filter((v1, i1, arr1) => arr1.indexOf(v1) === i1);


  const newArr2 = common.map((v, i, arr) => arr[i + 1] / arr[i]).filter((v1, i1, arr1) => arr1.indexOf(v1) === i1);

  newArr.length === 1 ? answer = common[common.length - 1] + parseInt(newArr) : answer = common[common.length - 1] * newArr2

  console.log(newArr, newArr2)
  return answer;
}