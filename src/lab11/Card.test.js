import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Card from './Card'

it('Should call props.onClick when #card is clicked', () => {
  const props = { title: 'My Title', body: 'My Body', onClick: sinon.spy() }
  const wrapper = shallow(<Card {...props} />)
  wrapper.find('#card').simulate('click')
  expect(props.onClick.callCount).toEqual(1)
  expect(props.onClick.calledWith({args1: '10', args2: '20'})).toBeTruthy()
})