/* function solution(n, m) {
  let arr = [];
  let arr1 = [];
  for (let i = 0; i <= (n > m ? n : m); i++) {
    n % i === 0 && m % i === 0 ? arr.push(i) : false;
  }

  for (let j = n * m; j > 0; j--) {
    j % n === 0 && j % m === 0 ? arr1.push(j) : false;
  }

  return [arr.sort((a, b) => b - a)[0], arr1.sort((a, b) => a - b)[0]];
}

solution(3, 12); */

function gcdlcm(a, b) {
  var r;
  for(var ab = a*b; r = a % b; a = b, b = r){}
  console.log([b, ab/b]);
}

gcdlcm(3, 12);