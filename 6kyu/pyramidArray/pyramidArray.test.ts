import { pyramid } from "./pyramidArray";

describe('Basic tests', () => {
    it('Basic test should work', () => {
        expect(pyramid(0)).toEqual([]);
        expect(pyramid(1)).toEqual([[1]]);
        expect(pyramid(2)).toEqual([[1], [1, 1]]);
        expect(pyramid(3)).toEqual([[1], [1, 1], [1, 1, 1]]);
    });
});