export const sum = (a) => {
  return (b) => a + b;
};
console.log(sum(5)(2));

export function getColor() {
  const colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];
  let i = 0;
  return function () {
    i === colors.length - 1 ? (i = 0) : i++;
    return colors[i];
  };
}

const getColorText1 = getColor();
const getColorText2 = getColor();
const getColorText3 = getColor();

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");

if (text1) {
  text1.addEventListener("click", (event) => {
    event.target.style.color = getColorText1();
  });
}
if (text2) {
  text2.addEventListener("click", (event) => {
    event.target.style.color = getColorText2();
  });
}
if (text3) {
  text3.addEventListener("click", (event) => {
    event.target.style.color = getColorText3();
  });
}
