import isValidWalk from "./isValidWalk";

describe("isValidWalk", function () {
    it("test", function () {
        expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(true);
        expect(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])).toBe(false);
        expect(isValidWalk(['w'])).toBe(false);
        expect(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(false);
        expect(isValidWalk(['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'])).toBe(true);
        expect(isValidWalk(['n', 'e', 'w', 'w', 'e', 'n', 's', 's', 'w', 'e'])).toBe(true);
        expect(isValidWalk(['n', 'n', 'n', 'n', 's', 's', 's', 's', 'e', 'w'])).toBe(true);
        expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'n'])).toBe(false);
        expect(isValidWalk(['n', 'e', 'n', 'e', 'n', 'e', 'n', 'e', 'n', 'e'])).toBe(false);
    });
});