import { humanReadable } from "./humanReadable";

describe('Basic tests', () => {
    it('Basic test should work', () => {
        expect(humanReadable(60)).toEqual('00:01:00');
        expect(humanReadable(86399)).toEqual('23:59:59');
        expect(humanReadable(359999)).toEqual('99:59:59');
    });
});