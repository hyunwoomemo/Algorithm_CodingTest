function solution(s) {
  let lcnt = 0;
  let rcnt = 0;
  let newArr = s.split('');
  for (let i = 0; i < newArr.length; i++) {
    if (rcnt > lcnt) break;
    newArr[i] === '(' ? lcnt++ : rcnt++;
  }  
  return lcnt === rcnt && newArr.length % 2 === 0 && newArr[0] === '(' && newArr[newArr.length - 1] === ')'  ? true : false;
}

solution("())");