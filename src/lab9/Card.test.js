import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

it('Should render title from props ', () => {
  const props = {title: 'My title'};
  const wrapper = shallow(<Card {...props}/>)
  expect(wrapper.find('#title').contains(props.title)).toBeTruthy()
})
