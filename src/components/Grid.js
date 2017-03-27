import React, { Component } from 'react'

class Grid extends Component {
  render() {
    return(
      <div>
        <h3>Grid</h3>
        <table>
          <tbody>
            <tr>
              <td>a{this.props.board[0][0]}</td>
              <td>{this.props.board[0][1]}</td>
              <td>{this.props.board[0][2]}</td>
            </tr>
            <tr>
              <td>{this.props.board[1][0]}</td>
              <td>{this.props.board[1][1]}</td>
              <td>{this.props.board[1][2]}</td>
            </tr>
            <tr>
              <td>{this.props.board[2][0]}</td>
              <td>{this.props.board[2][1]}</td>
              <td>{this.props.board[2][2]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default Grid