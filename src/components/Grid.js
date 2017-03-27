import React, { Component } from 'react'

import GridCell from '../containers/GridCell'

class Grid extends Component {
  render() {
    return(
      <div>
        <h3>Grid</h3>
        <table>
          <tbody>
            <tr>
              <GridCell row={0} column={0}/>
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