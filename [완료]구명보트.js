function solution(people, limit) {
  let answer = people.length;
  people.sort((a, b) => a - b);
  const cut = people.findIndex((e) => e > limit - people[0]);
  const cutArr = cut < 0 ? people : people.splice(0, cut);

  for (let i = 0; i < cutArr.length; i++) {
    if (cutArr.length === 1) {
      break;
    } else {
      if (cutArr[0] + cutArr[cutArr.length-1] <= limit) {
        cutArr.shift();
        cutArr.pop();
        answer--;
        i--;
      } else {
        cutArr.pop();
        i--;
      }
    }
  }
  return answer;
}

solution([70, 50, 80,150,100, 130,50,50,40,240], 240);