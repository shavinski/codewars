import isValid from "./isValid.test";

console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    '[]'
)); // true


describe("isValidWalk", function () {
    it("test", function () {
        expect(isValid(
            'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
            'Repl.it uses operational transformations.',
            '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]')).toBe(true);
        expect(isValid(
            'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
            'Repl.it uses operational transformations.',
            '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]')).toBe('false, skip past end');
        expect(isValid(
            'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
            'Repl.it uses operational transformations.',
            '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]')).toBe('false, skip past end');
        expect(isValid(
            'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
            'We use operational transformations to keep everyone in a multiplayer repl in sync.',
            '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]')).toBe(true);
        expect(isValid(
            'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
            'We can use operational transformations to keep everyone in a multiplayer repl in sync.',
            '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]')).toBe(false);
        expect(isValid(
            'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
            'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
            '[]')).toBe(true);
    });
});