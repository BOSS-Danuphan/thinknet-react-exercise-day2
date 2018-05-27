import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Gallery from './Gallery'
import axios from 'axios'

it('Should setState with new posts when axios.get resolved ', () => {
  const wrapper = shallow(<Gallery />, { disableLifecycleMethods : true });
  const instance = wrapper.instance();
  const mockGet = sinon.mock(axios).expects('get').once()
    .withExactArgs ('url')
    .resolves({ data: [] });
  const mockSetState = sinon.mock(instance).expects('setState').once()
    .withExactArgs({ images : [] });

  return instance.fetchImages('url')
    .then(() => {
      mockGet.verify()
      mockSetState.verify()
  });
});
