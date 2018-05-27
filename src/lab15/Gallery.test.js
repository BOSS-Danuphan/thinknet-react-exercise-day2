import React from 'react'
import { shallow } from 'enzyme'
import Gallery, {StyledH1} from './Gallery'

it('Snapshot testing', () => {
  const wrapper = shallow(<Gallery />, { disableLifecycleMethods: true });
  expect(wrapper).toMatchSnapshot()
});

it('Snapshot testing', () => {
  const wrapper = shallow(<StyledH1 />);
  expect(wrapper).toMatchSnapshot()
});
