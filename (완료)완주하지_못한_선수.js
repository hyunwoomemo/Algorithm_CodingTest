// 효율성 0점 코드

/* function solution(participant, completion) {
  completion.forEach((v) => participant.splice(participant.indexOf(v), 1));

  return participant.join('');
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);  */


// forEach를 for문으로 바꿔봤지만 또 효율점 0점
/* function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    participant.splice(participant.indexOf(completion[i]),1);
  }

  return participant.join('');
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]); */

// includes 메소드 사용, 동명이인은 제거하지 못함
/** 
function solution(participant, completion) {
  console.log(participant.filter((v) => completion.includes(v) === false).join(''));
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
*/

// 이것도 효율성 0점...
/** 
function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    if (participant.includes(completion[i]) === true) {
      participant.splice(participant.indexOf(completion[i]), 1);
      completion.splice(i, 1);
      i--;
    }
  }
  return participant.join('');
}


solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
*/


// 갯수 비교해서 같지않은거만 추출해도 효율성 0 점
/** 
function solution(participant, completion) {
  return participant.filter((v) => participant.filter((v1) => v1 === v).length !== completion.filter((v2) => v2 === v).length).filter((e, i, arr) => arr.indexOf(e) === i).join('');
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
*/

/** 
function solution(participant, completion) {
  participant.sort();
  completion.sort();
    
    console.log(participant);
    console.log(completion);

  for (let i = 0; i < participant.length; i++) {
      if (participant[i] !== completion[i] ) {
          return participant[i];
      }
  }
}

solution(
  ["mislav", "stanko", "mislav", "ana", ""], ["stanko", "ana", "mislav"]);
*/

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
        b = completion[i];

        map.set(a, (map.get(a) || 0) +1);
        map.set(b, (map.get(b) || 0) -1);
  }

  for (let [k, v] of map) {
    if (v > 0 ) console.log(k);
  }
}

solution(
  ["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);