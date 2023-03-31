function solution(priorities, location) {

  // 중복 숫자가 있는 배열에서 원하는 숫자를 찾기 위해 index가 location인 원소에 'check' 라는 문자열을 더한다.
  let newArr = priorities.map((v, i) => i === location ? v+'check' : v);

  // 기준이 되는 배열 즉, priorities 배열을 내림차순으로 나열한 배열을 만든다.
  let arr = priorities.sort((a, b) => b- a);

  let i = 0;

  while (i < newArr.length) {
    // newArr[i]의 정수와 내림차순 배열의 i번째 원소와 같지 않다면 i번째부터 1개를 잘라서 newArr 배열에 push한다.
    if (parseInt(newArr[i]) !== arr[i]) {
      newArr.push(...newArr.splice(i, 1));
      // 같다면 다음 번째로 넘어간다.
      // 이렇게 반복하게되면 자연스럽게 기준이 되는 배열과 원소의 배치가 동일해진다.
    } else {
      i++;
    }
  }

  // newArr 배열을 돌면서 String(v)의 값에 문자열 'c'가 있다면 true, 아니면 false값을 리턴하는 배열의 true가 있는 인덱스 값을 찾는다.
  // 찾은 인덱스의 +1 을 한다
return newArr.map((v) => String(v).indexOf('c')).map((v) => v > -1).indexOf(true)+1;
}
solution([2, 1, 3, 2], 2);
solution([1, 1, 2, 4, 5, 4, 3, 2, 9], 0);

