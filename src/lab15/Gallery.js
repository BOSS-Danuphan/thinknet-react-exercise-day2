import React, { Component } from 'react'
import styled from 'styled-components'
export const StyledH1 = styled.h1`
color: red;
font-size: 10px;
`
class Gallery extends Component {
  render() {
    return <StyledH1>Gallery</StyledH1>
  }
}
// Check package rewire
export default Gallery