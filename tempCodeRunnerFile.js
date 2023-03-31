const array = ['0', 1, 2, '0', '0', 3]

const filterArr = array.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  [],
)

console.log(filterArr);
