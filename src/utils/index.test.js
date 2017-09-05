import getStatistics from './index';

const data = {
  rows: [
    { id: '1', text: 'hello', img: ['1'] },
    { id: '2', text: 'foo', img: ['1'] },
    { id: '3', text: 'foobar', img: [] },
  ],
  cols: [
    { id: '4', text: 'longword', img: ['1'] },
  ],
};

describe('getStatistics() function', () => {
  it('receives 3 rows, 1 column, 3 images, longes label of 8 chars', () => {
    expect(getStatistics(data)).toEqual({
      rowNumber: 3,
      colNumber: 1,
      imgNumber: 3,
      longestRowLabel: 6,
      longestColLabel: 8,
    });
  });
});
