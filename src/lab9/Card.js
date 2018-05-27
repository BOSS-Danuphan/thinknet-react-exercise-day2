import React from 'react'
const Card = (props) => (
  <div className="find-me">
    <h1 id="title">{props.title || 'Default Title'}</ h1>
    <p id="body">body</p>
  </div>
)
export default Card