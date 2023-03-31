function solution(babbling) {
  let arr = ['aya', 'ye', 'woo', 'ma'];
  let wLength = 0;
  let result = 0;
  babbling.forEach((v) => {
    wLength = 0;
    arr.forEach((v1) => {
      v.indexOf(v1) > -1 ? wLength += v1.length : false;
    })
    v.length === wLength ? result++ : false;
  })
  return result;
}

solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);