import { Fork, Sponsor, Star, UsedBy, Watch } from '../index';

describe('>>> Exports required components', () => {
  it('+++ Fork is truthy', () => {
    expect(Fork).toBeTruthy();
  });

  it('+++ Sponsor is truthy', () => {
    expect(Sponsor).toBeTruthy();
  });

  it('+++ Star is truthy', () => {
    expect(Star).toBeTruthy();
  });

  it('+++ UsedBy is truthy', () => {
    expect(UsedBy).toBeTruthy();
  });

  it('+++ Watch is truthy', () => {
    expect(Watch).toBeTruthy();
  });
});
