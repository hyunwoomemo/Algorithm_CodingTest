function solution(numbers, hand) {
  let answer = [];
  let leftLoc = [3, 0]; // '*'의 좌표
  let rightLoc = [3, 2]; // '#'의 좌표
  let midleLoc;
  let leftArr = [1, 4, 7];
  let rightArr = [3, 6, 9];
  let table = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
  let leftResult = 0; // 중간값과 왼손의 거리
  let rightResult = 0; // 중간값과 오른손의 거리 

  numbers.forEach((v) => {
    if (leftArr.includes(v)) { // v가 [1, 4, 7]에 포함된다면
      table.forEach((v1, i1) => {
        v1.indexOf(v) > -1 ? leftLoc = [i1, v1.indexOf(v)] : false; // 왼손 위치 업데이트
      })
      answer.push('L'); // 결과 배열인 answer에 'L' push
    } else if (rightArr.includes(v)) { // v가 [3, 6, 9]에 포함된다면
      table.forEach((v1, i1) => {
        v1.indexOf(v) > -1 ? rightLoc = [i1, v1.indexOf(v)] : false; // 오른손 위치 업데이트
      })
      answer.push('R'); // 결과 배열인 answer에 'R' push
    } else { // v가 [2, 5, 8, 0]에 포함된다면
      table.forEach((v1, i1) => {
        v1.indexOf(v) > -1 ? midleLoc = [i1, v1.indexOf(v)] : false; // 중간값 좌표 설정
      })

      leftResult = Math.abs(midleLoc[0] - leftLoc[0]) + Math.abs(midleLoc[1] - leftLoc[1]); // 중간값과 왼손의 거리
      rightResult = Math.abs(midleLoc[0] - rightLoc[0]) + Math.abs(midleLoc[1] - rightLoc[1]); // 중간값과 오른손의 거리

      if (leftResult > rightResult) { // 왼손의 거리가 오른손의 거리보다 크다면
        table.forEach((v1, i1) => {
          v1.indexOf(v) > -1 ? rightLoc = [i1, v1.indexOf(v)] : false; // 오른손 위치 업데이트
        })
        answer.push('R'); // 결과 배열인 answer에 'R' push
      } else if (leftResult < rightResult) { // 왼손의 거리가 오른손의 거리보다 작다면
        table.forEach((v1, i1) => {
          v1.indexOf(v) > -1 ? leftLoc = [i1, v1.indexOf(v)] : false; // 왼손 위치 업데이트
        })
        answer.push('L'); // 결과 배열인 answer에 'L' push
      } else { // 왼손의 거리와 오른손의 거리가 같다면
        if (hand == 'right') {
          table.forEach((v1, i1) => {
            v1.indexOf(v) > -1 ? rightLoc = [i1, v1.indexOf(v)] : false;
          })
          answer.push('R'); // 오른손 잡이일 때 answer에 'R' push
        } else {
          table.forEach((v1, i1) => {
            v1.indexOf(v) > -1 ? leftLoc = [i1, v1.indexOf(v)] : false;
          })
          answer.push('L'); // 왼손 잡이일 때 answer에 'L' push
        }
      }
    }
  })
  
  return answer.join("");
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right");