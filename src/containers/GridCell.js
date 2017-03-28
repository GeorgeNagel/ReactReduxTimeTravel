import React, { Component } from 'react'
import { connect } from 'react-redux'

import { playPiece } from '../actions'

class GridCell extends Component {
  render() {
    let displayString = ""
    const tokenInSpace = this.props.board[this.props.row][this.props.column]
    if (tokenInSpace !== null) {
      if (tokenInSpace === 0) {
        displayString = this.props.player1Token
      } else {
        displayString = this.props.player2Token
      }
    }
    return <td onClick={this.props.clickCell}>{displayString}</td>
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.gameBoard.board,
    player1Token: state.players[0].token,
    player2Token: state.players[1].token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  let dispatch = dispatchProps.dispatch
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    clickCell: () => {
      dispatch(playPiece(ownProps.row, ownProps.column))
    }
  }
}

GridCell = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(GridCell)

export default GridCell