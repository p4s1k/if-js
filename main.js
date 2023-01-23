function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}
console.log(palindrome("шалаш"));

function min(a, b) {
  if (a < b) return a;
  return b;
}
console.log(min(1, 2));

function max(a, b) {
  if (a < b) return b;
  return a;
}
console.log(max(1, 2));

function minMax(a, b) {
  return a < b ? a : b;
}
console.log(minMax(1, 2));

function zero(array) {
  const result = [];

  for (const number of array) {
    let newWord = "";
    const word = number.toString();

    for (const symbol of word) {
      if (+symbol) newWord += symbol;
      else newWord += "zero";
    }
    result.push(newWord);
  }
  return result;
}
console.log(zero([0, 12, 10, 43, 40, 99, 100, 13, 31, 30]));
