const stringToArray = require('./main')

test('any string type becomes array', () => {
  expect(stringToArray('hello words')).toStrictEqual(['hello', 'words']);
})