function solution(s, n) {
  const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
  console.log(s[0] == String(s[0]).toUpperCase ? arr.map((v) => String(v).toUpperCase())[arr.indexOf(s[0]) + n] : arr.map((v) => String(v).toLowerCase())[arr.indexOf(s[0]) + n]);
}


solution("AB", 1);
solution('z', 1);