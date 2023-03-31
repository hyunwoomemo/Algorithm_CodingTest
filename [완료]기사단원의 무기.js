/* function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j == j)
          cnt++;
        else 
          cnt = cnt + 2; 
      }
    }
    answer += cnt > limit ? power : cnt;
  }
  console.log(answer);
  return answer;
}

solution(10, 3, 2);

// 정확성: 66.7
// 합계: 66.7 / 100.0

function countDivisors(n) {
  let cnt = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      // If divisors are equal,
      // count only one
      if (n / i == i)
        cnt++;

      else // Otherwise count both
        cnt = cnt + 2;
    }
  }
  console.log(cnt);
  return cnt;
}

countDivisors(100)

let count = 0;
let n = 100;

for (let i = 1; i <= n; i++) {
  n % i === 0 ? count++ : false;
}

console.log(count); */

function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j == j)
          cnt++;
        else 
          cnt = cnt + 2; //  
      }
    }
    answer += cnt > limit ? power : cnt;
  }
  return answer;
}