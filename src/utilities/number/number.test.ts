import { isEven, isOdd } from './number';

it('Returns a boolean if a number is even or odd', () => {
  expect(isOdd(0)).toBe(false);
  expect(isOdd(1)).toBe(true);
  expect(isEven(0)).toBe(true);
  expect(isEven(1)).toBe(false);
});
