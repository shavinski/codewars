describe("Disemvowel",()=>{
    it("This website is for losers LOL! ===> Ths wbst s fr lsrs LL!",() => {
      expect(disemvowel("This website is for losers LOL!")).toEqual("Ths wbst s fr lsrs LL!");
    });

    it("No offense but,\nYour writing is among the worst I've ever read ===> N ffns bt,\nYr wrtng s mng th wrst 'v vr rd", () => {
      expect(disemvowel("No offense but,\nYour writing is among the worst I've ever read")).toEqual("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
    });

    it("What are you, a communist? ===> Wht r y,  cmmnst?",()=>{
      expect(disemvowel("What are you, a communist?")).toEqual("Wht r y,  cmmnst?");
    });
  });