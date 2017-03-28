import React, { Component } from 'react'

class TextField extends Component {
  handleChange(event) {
    this.props.onChange(event.target.value)
  }
  render() {
    // constructor(props) {
    //   super(props);
    //   this.state = {value: this.props.value};

    //   this.handleChange = this.handleChange.bind(this);
    // }
    return (
      <span>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input name={this.props.name} type="text" value={this.props.value} onChange={this.handleChange.bind(this)}/>
      </span>
    )
  }
}

export default TextField