let user = "John Doe";
console.log(user);

const student = "Pavel";
console.log(student);
user = student;
//в переменной user будет лежать значение переменной Student, т.е String "Pavel"
console.log(user);

let test = 1;
test++;
test += "1";
//в test лежит String "21", т.к в js Number+String=String
console.log(test);
test -= 1;
//в test лежит Number "20", т.к в js Number(-,*,/)String=Number
console.log(test);

test = Boolean(test);
//в test лежит true, т.к все Number=true, кроме "0"
console.log(test);

let array = [2, 3, 5, 8];
let result = 1;

for (const i of array) {
  result *= i;
}
console.log(result);

array = [2, 5, 8, 15, 0, 6, 20, 3];

for (const i of array) {
  if (i > 5 && i < 10) {
    console.log(i);
  }
}

for (const i of array) {
  if (i % 2 === 0) {
    console.log(i);
  }
}