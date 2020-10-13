const BowlingClass = require("./bowling");

describe("Bowling", () => {
  it("handles a very boring game where 0 pins are hit all game", () => {
    const bowling = new BowlingClass();

    /* Start here */
    bowling.roll(0);

    expect(bowling.getScore()).toEqual(0);
  });

  it("handles a less boring game where pins are hit but no strikes or spares", () => {});

  it("handles a spare in a game", () => {});

  it("handles multiple spares in a game", () => {});
});
