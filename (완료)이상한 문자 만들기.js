/* function solution(s) {
  console.log(s.split("").map((v, i) => i % 2 == 0 || i == 0 ? String(v).toUpperCase() : String(v).toLowerCase()).join(''));
} */

function solution(s) {
  let newArr = s.split(' ');
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    if (i !== 0) {
      result.push(' ');
    }
    for (let j = 0; j < newArr[i].length; j++) {
      if (j == 0 || j % 2 == 0) {
        result.push(String(newArr[i][j]).toUpperCase());
      } else {
        result.push(String(newArr[i][j]).toLowerCase());
      }
    }
  }
  
  return result.join('');
}

solution("try hello world");