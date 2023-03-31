function solution(a, b, n) {
  let answer = 0;

  while (Math.floor(n / a) * b + n % a >= a) {
    console.log(Math.floor(n / a) * b);
    answer += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + n % a;
    console.log(Math.floor(n / a) * b + n % a);
  }
  return answer + Math.floor(n / a) * b;
}

solution(3, 1, 20);


