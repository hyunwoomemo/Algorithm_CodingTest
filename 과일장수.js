function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => a - b);
  while (score.length >= m) {
    let box = [];
    for (let i = 0; i < m; i++) {
      box.push(score.pop());
    }
    answer += Math.min(...box) * m;
  }
  console.log(answer);
  return answer;
}

solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);

/** 
 * * m이 5일 때,
 * * [4, 4, 4, 4] 16
 * * [4,4,4,3,3] 18
 * * [5, 5, 5, 5] 20
 * * [5, 4, 4, 3, 3] 19
 */