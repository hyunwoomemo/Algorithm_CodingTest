function solution(prices) {
  let resultArr= [];
  for (let i = 0; i < prices.length; i++) {
    let cnt = 0;
    for (let j =i+1; j < prices.length; j++) {
      prices[i] <= prices[j] ? cnt++ : false;
    }
    resultArr.push(cnt);
  }
  return resultArr;
}

solution([1, 2, 3, 2, 3]);