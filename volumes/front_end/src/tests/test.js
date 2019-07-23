const sum = require('../sum');

test('adds 10 + 20 to equal 30', () => {
  expect(sum(10, 20)).toBe(30);
});