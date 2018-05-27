import {sum, minus, multiply, divide} from '../lab1/calculator'
import {houseForSale, alwaysTrue} from '../lab2/utilities';

describe('Here is lab1', () => {
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
})

describe('Here is lab2', () => {
  test('HouseForSale: this house has my desired features', () => {
    // Simple Referencing
    expect(houseForSale).toHaveProperty('bath');
    expect(houseForSale).toHaveProperty('bedrooms', 4);

    expect(houseForSale).not.toHaveProperty('pool');

    // Deep referencing using dot notation
    expect(houseForSale).toHaveProperty('kitchen.area', 20);
    expect(houseForSale).toHaveProperty('kitchen.amenities', [
      'oven',
      'stove',
      'washer',
    ]);

    expect(houseForSale).not.toHaveProperty('kitchen.open');

    // Deep referencing using an array containing the keyPath
    // expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);
    // expect(houseForSale).toHaveProperty(
    //   ['kitchen', 'amenities'],
    //   ['oven', 'stove', 'washer'],
    // );
    // expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
    // expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);
    // expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);
  });

  test('alwaysTrue should return true', () => {
    expect(alwaysTrue()).toBe(true);
  });
});