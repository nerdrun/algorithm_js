const nextBigger = require('./main')

describe('The next bigger number', () => {
  test('the next bigger number of 12 is 21', () => {
    expect(nextBigger(12)).toBe(21)
  })

  test('the next bigger number of 512 is 521', () => {
    expect(nextBigger(512)).toBe(521)
  })

  test('the next bigger number of 2017 is 2071', () => {
    expect(nextBigger(2017)).toBe(2071)
  })

  test('the next bigger number of 144 is 414', () => {
    expect(nextBigger(144)).toBe(414)
  })

  test('the next bigger number of 352 is 523', () => {
    expect(nextBigger(352)).toBe(523)
  })

  test('the next bigger number of 643220 is -1', () => {
    expect(nextBigger(643220)).toBe(-1)
  })

  test('the next bigger number of 29977540 is 40257799', () => {
    expect(nextBigger(29977540)).toBe(40257799)
  })
});
