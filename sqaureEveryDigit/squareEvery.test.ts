import squareDigits from "./squareEvery";

describe("Square Digits", () => {
  it("9119 => 811181", () => {
    expect(squareDigits(9119)).toBe(811181);
  });

  it("765 => 493625", () => {
    expect(squareDigits(765)).toBe(493625);
  });

  it("1 => 1", () => {
    expect(squareDigits(1)).toBe(1);
  });

  it("2 => 4", () => {
    expect(squareDigits(2)).toBe(4);
  });

});