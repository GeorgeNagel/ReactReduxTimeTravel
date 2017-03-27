import React, { Component } from 'react'
import { connect } from 'react-redux'

class GridCell extends Component {
  render() {
    let displayString = ""
    let tokenInSpace = this.props.board[this.props.row][this.props.column]
    if (tokenInSpace !== null) {
      if (tokenInSpace === 0) {
        displayString = this.props.player1Token
      } else {
        displayString = this.props.player2Token
      }
    }
    return <td>{displayString}</td>
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.gameBoard.board,
    player1Token: state.players[0].icon,
    player2Token: state.players[1].icon
  }
}

const mapDispatchToProps = (state) => {
  return {}
}

GridCell = connect(
  mapStateToProps,
  mapDispatchToProps
)(GridCell)

export default GridCell