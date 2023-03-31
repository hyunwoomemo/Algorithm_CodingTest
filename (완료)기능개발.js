function solution(progresses, speeds) {

  // 작업 기간을 원소로 하는 새로운 배열만들기
  let newArr = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));

  // 결과 배열 만들기
  const result = [];


  for (let i = 0; i < newArr.length; i++) {
    // splice 메소드를 사용해서 원소를 삭제하므로 if 문은 0번째 원소로 고정
    if (newArr[0] < newArr[i]) {
      // 0번째 원소보다 i번째 원소가 크다면 0번째부터 i개 원소를 추출하여 result에 push
      result.push(newArr.splice(0, i));
      // 위 작업 후 i를 0으로 초기화
      i = 0;
    }
  }
  // for문을 진행 후 비교할 대상이 없어서 남은 원소들을 result에 push
  result.push([...newArr]);

  // 결과를 위한 배열들의 길이 추출
  console.log(result.map((v) => v.length));
}


solution([93, 30, 55, 70, 3, 60, 10, 44, 30, 30, 30], [1, 30, 5, 8, 12, 7, 20, 30, 7, 1, 20]);
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);