import { isSquare, isSquare2 } from "./youAreSquare";

describe("isSquare", function () {
    it("should work for some examples", function () {
        expect(isSquare(-1)).toBe(false);
        expect(isSquare(0)).toBe(true);
        expect(isSquare(3)).toBe(false);
        expect(isSquare(4)).toBe(true);
        expect(isSquare(25)).toBe(true);
        expect(isSquare(26)).toBe(false);
    });
});

describe("isSquareV2", function () {
    it("should work for some examples", function () {
        expect(isSquare2(-1)).toBe(false);
        expect(isSquare2(0)).toBe(true);
        expect(isSquare2(3)).toBe(false);
        expect(isSquare2(4)).toBe(true);
        expect(isSquare2(25)).toBe(true);
        expect(isSquare2(26)).toBe(false);
    });
});