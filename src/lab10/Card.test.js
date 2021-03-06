import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

it('Match its snapshot ', () => {
  const props = {
    title: 'My Title'
  }
  const wrapper = shallow(<Card {...props} />)
  expect(wrapper).toMatchSnapshot()
})