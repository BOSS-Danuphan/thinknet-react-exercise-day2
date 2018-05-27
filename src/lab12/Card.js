import React from 'react'
class Card extends React.Component {
  state = {
    page: 1,
    pageSize: 20,
    rendered: false
  }

  componentDidMount() {
    this.setState({rendered: true})
    this.props.callApi();
  }

  render() {
    const props = this.props
    return (
      <div id="card">
        <h1 id="title">{props.title}</h1>
        <p id="body">{props.body}</p>
        <p id="page">{this.state.page}</p>
      </div>
    )
  }
}

export default Card
