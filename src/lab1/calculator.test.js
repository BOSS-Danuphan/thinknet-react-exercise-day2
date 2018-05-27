import {sum, minus, multiply, divide} from './calculator'

test('Sum should return 3 when input is 1, 2', () => {
  const actual = sum(1,2)
  expect(actual).toEqual(3)
})

test('Minus should return 3 when input is 4, 1', () => {
  const actual = minus(4,1)
  expect(actual).toEqual(3)
})

test('Multiply should return 10 when input is 5, 2', () => {
  const actual = multiply(5,2)
  expect(actual).toEqual(10)
})

test('Divide should return 4 when input is 12, 3', () => {
  const actual = divide(12,3)
  expect(actual).toEqual(4)
})

test('Divide should return Infinity when input is 1, 0', () => {
  const actual = divide(1,0)
  expect(actual).toEqual(Infinity)
})
