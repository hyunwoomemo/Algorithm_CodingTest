function solution(genres, plays) {
  // 장르 배열을 장르 이름과 재생 횟수 배열로 가공 
  let newArr = genres.map((v, i) => [v, plays[i]]); // [ 'classic', 500 ] 
  // 가공한 위 배열에서 reduce 메서드를 사용해 장르의 이름과 장르 전체 재생횟수, 개인 재생 횟수, 인덱스 4개의 원소를 가진 배열로 다시 가공한다.
  let sumArr = newArr.map((v, i, arr) => [v[0], arr.reduce((acc, cur) => acc + (cur[0] === v[0] ? cur[1] : false), 0), plays[i], i]); // [ 'classic', 1450, 500, 0 ]
  // sort 메서드를 사용해 조건에 맞춰서 장르의 총 재생횟수가 높은 순으로, plays 재생횟수가 많은 순으로, 재생횟수가 같다면 인덱스가 낮은 순으로 정렬한다. ex ) [ 'pop', 3100, 2500, 4 ], [ 'pop', 3100, 600, 1 ],
  let sortArr = sumArr.sort((a, b) => a[3] - b[3]).sort((a, b) => b[2] - a[2]).sort((a, b) => b[1] - a[1]);
  // 인덱스만 리턴

  let tmpArr = sortArr.map((v) => v[0]);
  
  // 같은 장르는 2개까지만 넣어야하기 때문에 3번째부터 곡들의 인덱스를 추출하는 빈 배열 생성
  let checkArr = [];

  let count = 1;
  for (let i = 0; i < tmpArr.length; i++) {
    if (tmpArr[i] === tmpArr[i + 1]) {
      count++;
      count >= 3 ? checkArr.push(i + 1) : false;
    } else {
      count = 1;
    }
  }
  
  // 정답 제출을 위한 고유 번호를 모아놓은 배열 생성
  let indexArr = sortArr.map((v) => v[3]);

  // 정답 배열
  let answer = [];

  // i가 0부터 1씩 증가하면서 checkArr에 i가 포함되어 있으면 건너뛰고 그렇지 않다면 answer에 push
  for (let i = 0; i < indexArr.length; i++) {
    if (!checkArr.includes(i)) {
      answer.push(indexArr[i]);
    }
  }
  return answer;
}

solution(["classic", "pop", "classic", "classic", "pop"], [100, 300, 400, 150, 100]);