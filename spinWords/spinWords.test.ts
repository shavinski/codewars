import spinWords from "./spinWords";

describe("Spinning words", () => {
    it("should make 'Welcome' into 'emocleW'", () => {
        expect(spinWords("Welcome")).toBe("emocleW");
    });

    it("should make 'Hey fellow warriors' into 'Hey wollef sroirraw'", () => {
        expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw");
    });

    it("should make 'This is a test' into 'This is a test'", () => {
        expect(spinWords("This is a test")).toBe("This is a test");
    });

    it("should make 'This is another test' into 'This is rehtona test'", () => {
        expect(spinWords("This is another test")).toBe("This is rehtona test");
    });
});