import {runCallback, runTwiceCallback} from './spy';
import sinon from 'sinon';
const spyCallback = sinon.spy();

beforeAll(() => {})
afterAll(() => {})
beforeEach(() => {
  spyCallback.resetHistory()
})
afterEach(() => {})

it('Should call callback', () => {
  runCallback(spyCallback);
  expect(spyCallback.callCount).toEqual(1);
  expect(spyCallback.withArgs({ foo: 'foo' }).callCount).toBe(1);
});

it('Should call callback twice', () => {
  runTwiceCallback(spyCallback);
  expect(spyCallback.callCount).toEqual(2);
  expect(spyCallback.withArgs({ foo: 'foo' }).callCount).toBe(2);
});
