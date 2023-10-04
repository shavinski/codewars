import solution from "./solution";

describe("Solution", () => {
  it("Handle simple test case of 10, should equal 23", () => {
    expect(solution(10)).toBe(23);
  });

  it("Handle simple test case of 15, should equal 45", () => {
    expect(solution(15)).toBe(45);
  });

  it("Handle negative test case, should equal 0", () => {
    expect(solution(-1)).toBe(0);
  });

});