const getColor = require("../main");

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
});
