import { fizzbuzz } from './fizzbuzz';

it('Should return output correctly', () => {
  expect(fizzbuzz(1)).toBe(1);
  expect(fizzbuzz(9)).toBe('fizz');
  expect(fizzbuzz(10)).toBe('buzz');
  expect(fizzbuzz(15)).toBe('fizz buzz');
  expect(fizzbuzz()).toBe('fizz buzz');
  expect(fizzbuzz('text')).toBe('text');
  expect(fizzbuzz(null)).toBe('fizz buzz');
});
