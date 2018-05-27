import {getRandomNumber} from './mock'
import sinon from 'sinon'

it('Should return correct number', () => {
  const mockRandom = sinon.mock(Math).expects('random').once().returns(0.55)
  const mockFloor = sinon.mock(Math).expects('floor').once().withExactArgs(6.5).returns(6)

  const number = getRandomNumber()

  expect(number).toBe(6)
  mockRandom.verify();
  mockFloor.verify();
})
