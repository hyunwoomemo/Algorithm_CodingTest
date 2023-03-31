/* function solution(jobs) {
  // 
  let [first, ...restArr] = jobs.sort((a, b) => a[0] - b[0]);

  let newArr = [];
  newArr.push(first);
  jobs.forEach((v, i, arr) => {
    let sum = newArr.map((v) => v[1]).reduce((acc, cur) => acc + cur);
    // first 
    newArr.push(jobs.filter((v, i) => v[0] <= sum && newArr.map((v) => v[0]).includes(v[0]) === false).sort((a, b) => a[1] - b[1])[0]);
  })
  console.log(newArr);

  // 1번째원소 2번째원소
  // 

  let resultArr = newArr.filter((v) => v !== undefined);
  console.log(resultArr);
  let answer = [];
  for (let i = 0; i < resultArr.length; i++) {
    let sum = 0;
    for (let j = 0; j < resultArr.length; j++) {
      i >= j ? sum += resultArr[j][1] : false;
    }
    console.log(sum);
    answer.push(sum - resultArr[i][0]);
  }
  console.log(answer);
  return answer.reduce((acc, cur) => acc + cur) / answer.length;
}

solution([[1, 3], [2, 1], [8, 8]]); */

// 쉬는 시간 대응 못함

// 35 78 96
// 
function solution(jobs) {
  // 0번째 실행해
  // 총 작업 시간 범주안에서 실행 할게 있으면 작업시간 낮은 것부터 먼저 실행해
  let work = [];

  let sortArr = jobs.sort((a, b) => a[0] - b[0]);
  let first = sortArr[0];
  work.push(first);
  let sum = 0;
  for (let i = 0; i < sortArr.length; i++) {
    sum += sortArr[i][1];
    let sortArr2 = sortArr.sort((a, b) => a[1]- b[1]);
    work.push(...sortArr2.splice(sortArr2.findIndex((v, i, arr) => i !== 0 && v[0] <= sum), 1));
  }
  answer = [];
  let sum1 = 0;
  work.forEach((v, i, arr) => {
    sum1 += v[1];
    answer.push(sum1- v[0]);
  })
  console.log(answer);
  console.log(Math.floor(answer.reduce((acc, cur) => acc + cur) / answer.length));
  return Math.floor(answer.reduce((acc, cur) => acc + cur) / answer.length);
}

solution([[0, 1], [1, 3], [5, 11]]);

