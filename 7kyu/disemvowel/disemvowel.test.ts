import disemvowel from "./disemvowel";

describe("Disemvowel", () => {
  it("This website is for losers LOL! ===> Ths wbst s fr lsrs LL!", () => {
    expect(disemvowel("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!");
  });

  it("No offense but,\nYour writing is among the worst I've ever read ===> N ffns bt,\nYr wrtng s mng th wrst 'v vr rd", () => {
    expect(disemvowel("No offense but,\nYour writing is among the worst I've ever read")).toBe(
      "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
    );
  });

  it("What are you, a communist? ===> Wht r y,  cmmnst?", () => {
    expect(disemvowel("What are you, a communist?")).toBe("Wht r y,  cmmnst?");
  });
});