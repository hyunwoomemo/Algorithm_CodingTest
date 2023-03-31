function solution(operations) {
  let result = [];
  // 
  operations.forEach((v) => v.includes('I') ? result.push(+v.slice(2)) : +v.slice(2) < 0 ? result.sort((a, b) => b - a).pop(): result.sort((a, b) => b - a).shift());
  return result.length === 0 ? [0, 0] : [Math.max(...result), Math.min(...result)];
}

solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]);