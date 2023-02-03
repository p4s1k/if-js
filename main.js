const palindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(palindrome("шалаш"));

function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}
console.log(min(1, 2));

function max(a, b) {
  if (a < b) {
    return b;
  }
  return a;
}
console.log(max(1, 2));

const minArrow = (a, b) => (a < b ? a : b);
console.log(minArrow(12, 22));

const maxArrow = (a, b) => (a > b ? a : b);
console.log(maxArrow(12, 22));

function zero(array) {
  const result = [];
  for (const number of array) {
    result.push(String(number).replaceAll("0", "zero"));
  }
  return result;
}
console.log(zero([0, 12, 10, 43, 40, 99, 100, 13, 31, 30]));
