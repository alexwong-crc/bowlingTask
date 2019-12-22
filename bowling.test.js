const Bowling = require('./bowling');

describe('Bowling', () => {
  it('handles a very boring game', () => {
    const egBowling = new Bowling();

    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);

    expect(egBowling.getScore()).toBe(0);
  });

  it('handles a less boring game', () => {
    const egBowling = new Bowling();

    egBowling.roll(5);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(5);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(7);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);

    expect(egBowling.getScore()).toBe(17);
  });

  it('handles a spare in a game', () => {
    const egBowling = new Bowling();

    egBowling.roll(6); // 6
    egBowling.roll(4); // 13
    egBowling.roll(3); // 16
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);

    expect(egBowling.getScore()).toBe(16);
  });

  it('handles multiple spares in a game', () => {
    const egBowling = new Bowling();

    egBowling.roll(6); // 6
    egBowling.roll(4); // 13
    egBowling.roll(3); // 16
    egBowling.roll(0);
    egBowling.roll(4);
    egBowling.roll(6);
    egBowling.roll(7);
    egBowling.roll(1); // 41
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);
    egBowling.roll(0);

    expect(egBowling.getScore()).toBe(41);
  });

});
