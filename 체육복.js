// 앞번호의 학생이나 뒷번호의 학생에게만 체육복을 빌려줄 수 있음
// 최대한 많은 학생이 체육수업을 들어야 함
// 여벌 체육복을 가져온 학생이 체육복을 도난당할 수 있음 

function solution(n, lost, reserve) {
  let filterLost = lost.filter((v) => !reserve.includes(v)); // 잃어버린 사람들 중 여분도 없는 진짜 잃어버린 사람
  let answer = n - filterLost.length;
  let count = 0;

  let newReserve = reserve.filter((v) => !lost.includes(v)).map((v1) => [v1 - 1, v1 + 1]);
  console.log(newReserve);

  newReserve.forEach((v1) => {
    count = 0;
    filterLost.forEach((v2) => {
      if (v1.includes(v2)) {
        count++;
      }
      v1.push(count);
    })
  })

  let sortReserve = newReserve.sort((a, b) => a[2] - b[2]).map((v, i, arr) => v.slice(0, 2));

  filterLost.forEach((v) => {
    sortReserve.forEach((v1, i, arr) => {
      if (v1.includes(v)) {
        answer++
        arr.splice(arr.indexOf(v), 1);
      }
    })
  })

  return answer;
}

solution(5, [2, 3, 4, 7], [2, 3, 4, 5, 1, 6]);