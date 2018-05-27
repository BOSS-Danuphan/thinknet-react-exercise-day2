import React from 'react'
const Card = (props) => (
  <div id="card" onClick={() => props.onClick({args1: '10', args2: '20'})}>
    <h1 id="title">{props.title}</h1>
    <p id="body">{props.body}</p>
  </div>
)
export default Card
