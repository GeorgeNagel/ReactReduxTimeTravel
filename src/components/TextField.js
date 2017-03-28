import React, { Component } from 'react'

class TextField extends Component {
  handleChange(event) {
    this.props.onChange(event.target.value)
  }
  render() {
    return (
      <span>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input name={this.props.name} type="text" value={this.props.value} onChange={this.handleChange.bind(this)}/>
      </span>
    )
  }
}

export default TextField