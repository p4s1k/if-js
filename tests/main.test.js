import {getColor, sum} from "../main.js";

describe("getColor", () => {
  const fun = getColor();
  test("first", () => {
    expect(fun()).toBe("cyan");
  });
  test("second", () => {
    expect(fun()).toBe("firebrick");
  });
  test("third", () => {
    expect(fun()).toBe("springgreen");
  });
  test("fourth", () => {
    expect(fun()).toBe("skyblue");
  });
  test("fifth", () => {
    expect(fun()).toBe("magenta");
  });
  test("repeat", () => {
    expect(fun()).toBe("cyan");
  });
  test("sum", () => {
    expect(sum(5)(2)).toBe(7);
  });
});
