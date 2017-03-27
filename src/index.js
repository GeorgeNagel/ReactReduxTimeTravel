import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
  React.createElement(HelloMessage, { name: "Datto" }),
  document.getElementById('root')
);