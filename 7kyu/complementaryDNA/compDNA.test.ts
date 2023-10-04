import DNAStrand from "./compDNA";

describe("Complementary DNA", () => {
  it("AAAA ===> TTTT", () => {
    expect(DNAStrand("AAAA")).toBe("TTTT");
  });

  it("ATTGC ===> TAACG", () => {
    expect(DNAStrand("ATTGC")).toBe("TAACG");
  });

  it("GTAT ===> CATA", () => {
    expect(DNAStrand("GTAT")).toBe("CATA");
  });
});