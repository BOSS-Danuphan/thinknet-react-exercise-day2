import React, { Component } from 'react'
import axios from 'axios'

class Gallery extends Component {
  state = { images: [] }

  fetchImages = (url) => {
    return axios.get(url)
      .then(response => this.setState({ images: response.data }))
  }

  render() {
    return <h1>Gallery</h1>
  }
}
export default Gallery