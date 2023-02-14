export const sum = (a) => (b) => a + b;

console.log(sum(5)(2));

const colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];

export const getColor = () => {
  let i = 0;

  return (event) => {
    event.target.style.color = colors[i];
    i === colors.length - 1 ? (i = 0) : i++;
  };
};

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");

text1.addEventListener("click", getColor());
text2.addEventListener("click", getColor());
text3.addEventListener("click", getColor());
