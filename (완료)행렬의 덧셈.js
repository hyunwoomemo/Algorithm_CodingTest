function solution(arr1, arr2) {
  let answer = arr1.map((v, i, arr) => v.map((v1, i1) => v1 + arr2[i][i1]));

  return answer;
  }

solution([[1,2],[2,3]], [[3,4],[5,6]]);