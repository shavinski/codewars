import { multiplicationTable } from "./multiplicationTable"

it('multiplicationTable tests', function () {
    expect(multiplicationTable(1)).toEqual([[1]]);
    expect(multiplicationTable(2)).toEqual([[1, 2], [2, 4]]);
    expect(multiplicationTable(3)).toEqual([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
});