import {getRandomNumber} from './stub'
import sinon from 'sinon'

it('Test floor', () => {
  expect(Math.random()).not.toBeUndefined()
  expect(Math.floor(1.8)).toBe(1)
})

it('Should return correct number', () => {
  const stubRandom = sinon.stub(Math, "random").callsFake(() => 0.55)
  // const stubFloor = sinon.stub(Math, 'floor').withArgs(6.5).returns(6)
  const stubFloor = sinon.stub(Math, 'floor').withArgs(sinon.match.number).returns(6)

  expect(getRandomNumber()).toBe(6)

  expect(stubRandom.callCount).toEqual(1)
  expect(stubFloor.callCount).toEqual(1)
  expect(stubFloor.withArgs(6.5).callCount).toEqual(1)
  expect(stubFloor.calledWith(6.5)).toEqual(true)
  expect(stubFloor.calledOnceWith(6.5)).toEqual(true)

  // stubRandom.restore()
  // stubFloor.restore() // Not sure why this line error when run after stubRandom.restore()
  sinon.restore();
})

it('test', () => {
  expect(Math.floor(1.8)).toBe(1)
  expect(typeof Math.random()).toBe('number')
})
