import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Card from './Card'

const props = {callApi: sinon.spy()}

describe('Test initial state', () => {
  test('Default state rendered should be false as default', () => {
    const wrapper = shallow(<Card {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.state()).toHaveProperty('rendered', false);
    wrapper.setState({page: 10})
    
    expect(props.callApi.notCalled).toBeTruthy()
  });

  test('Default state rendered should be false as default', () => {
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper.state()).toHaveProperty('rendered', true);
    expect(props.callApi.callCount).toBe(1)
  });

  test('Set state when disable life cycle', () => {
    const wrapper = shallow(<Card {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.state()).toHaveProperty('rendered', false);
    wrapper.setState({page: 10})
    expect(wrapper).toMatchSnapshot()
  });
});