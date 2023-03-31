function solution(ingredient) {
  answer = 0;

  while (ingredient.join('').indexOf('1231') > 0) {
    answer++;
    ingredient.splice(ingredient.join('').indexOf('1231'), 4)
    console.log(ingredient);

    if (ingredient.length < 4) {
      break;
    }

  }
  console.log(answer);
  return answer;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);