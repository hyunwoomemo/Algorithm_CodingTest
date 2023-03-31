function solution(strings, n) {
  let newArr = strings.map((v) => v.split(''));
  console.log(newArr.sort());
}

solution(["sun", "bed", "car"], 1);