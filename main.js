const colors = {
  data: ["magenta", "cyan", "firebrick", "springgreen", "skyblue"],
  map: new Map(),
  [Symbol.iterator]() {
    return this;
  },
  next(id) {
    if (!this.map.has(id)) {
      this.map.set(id, -1);
    }

    this.map.get(id) === this.data.length - 1
      ? this.map.set(id, 0)
      : this.map.set(id, this.map.get(id) + 1);

    return {
      done: true,
      value: this.data[this.map.get(id)],
    };
  },
};

const getColor = (id) => (event) => {
  event.target.style.color = colors.next(id).value;
};

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");

text1.addEventListener("click", getColor(text1.id));
text2.addEventListener("click", getColor(text2.id));
text3.addEventListener("click", getColor(text3.id));