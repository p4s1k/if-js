const obj1 = {
  a: "a",
  b: {
    a: "a",
    b: "b",
    c: {
      a: 1,
    },
  },
  d: 1,
};
const obj2 = {
  d: 1,
  b: {
    c: {
      a: 1,
    },
    b: "b",
    a: "a",
  },
  a: "a",
};
const obj3 = {
  a: {
    c: {
      a: "a",
    },
    b: "b",
    a: "a",
  },
  b: "b",
};

const deepEqual = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    //ЕСЛИ РАЗНОЕ КОЛИЧЕСТВО КЛЮЧЕЙ, ТО СРАЗУ БАН
    return false;
  }
  for (const objKey in obj1) {
    if (obj2[objKey] === undefined) {
      //ЕСЛИ НЕТ КЛЮЧА У ВТОРОГО ОБЪЕКТА, ТО БАН
      return false;
    }
    //БЕЖИМ ПО ОБЪЕКТУ
    if (typeof obj1[objKey] === "object" && typeof obj2[objKey] === "object") {
      // ЕСЛИ ЗНАЧЕНИЕ - ЭТО ОБЪЕКТ, ТО ЗАХОДИМ В НЕГО И ОЖИДАЕМ TRUE ДЛЯ ПОДОЛЖЕНИЯ
      if (!deepEqual(obj1[objKey], obj2[objKey])) {
        //ЕСЛИ ВЛОЖЕННЫЙ ОБЪЕКТ ПРОВЕРКУ НЕ ПРОШЕЛ, ТО МЫ С НИМ В ТУР НЕ ПОЕХАЛИ
        return false;
      }
    } else {
      // ЕСЛИ НЕ ОБЪЕКТ, ТО СРАВНИЕВАЕМ
      if (obj1[objKey] !== obj2[objKey]) {
        // РАЗНЫЕ ЗНАЧЕНИЯ - БАН
        return false;
      }
    }
  }
  return true;
};

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
