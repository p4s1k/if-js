function replacer(match, p1, p2, p3) {
  return [p3, p2, p1].join(`.`);
}

const dateFormat = (date) => date.replace(/(\w+).(\w+).(\w+)/, replacer);

console.log(dateFormat(`2023-12-31`));
