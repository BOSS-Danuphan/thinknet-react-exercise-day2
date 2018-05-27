import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Gallery from './Gallery'

test('ComponentDidMount call fetchImages', () => {
  const wrapper = shallow(<Gallery />, { disableLifecycleMethods: true })
  const instance = wrapper.instance()
  const spy = sinon.spy(instance, 'fetchImages')

  wrapper.instance().componentDidMount()
  expect(spy.calledOnce).toBeTruthy();
})