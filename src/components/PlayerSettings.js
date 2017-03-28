import React, { Component } from 'react'

import TextField from './TextField'

class PlayerSettings extends Component {
  render() {
    return(
      <div>
        <h3>Settings</h3>
        <div>
          <TextField label={"Player 1 Name"} name={"player1name"} value={this.props.playerSettings[0].name} onChange={this.props.updatePlayer1Name}/>
          <TextField label={"Player 1 Token"} name={"player1token"} value={this.props.playerSettings[0].token} onChange={this.props.updatePlayer1Token}/>
        </div>
        <div>
          <TextField label={"Player 2 Name"} name={"player2name"} value={this.props.playerSettings[1].name} onChange={this.props.updatePlayer2Name}/>
          <TextField label={"Player 2 Token"} name={"player2token"} value={this.props.playerSettings[1].token} onChange={this.props.updatePlayer2Token}/>
        </div>
      </div>
    )
  }
}
export default PlayerSettings