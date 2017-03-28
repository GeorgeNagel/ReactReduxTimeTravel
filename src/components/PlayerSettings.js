import React, { Component } from 'react'

class PlayerSettings extends Component {
  render() {
    return(
      <div>
        <h3>PlayerSettings</h3>
        <div>
          <label for="player1name">Player 1 Name</label>
          <input name="player1name" type="text"></input>
          <label for="player1token">Player 1 Token</label>
          <input name="player1token" type="text"></input>
        </div>
        <div>
          <label for="player2name">Player 2 Name</label>
          <input name="player2name" type="text"></input>
          <label for="player2token">Player 2 Token</label>
          <input name="player2token" type="text"></input>
        </div>
      </div>
    )
  }
}
export default PlayerSettings