import expect from 'expect'
import deepFreeze from 'deep-freeze'

import appState from '../../reducers'

describe('undefined state', () => {
  it('should return initial state', () => {
    const action = {
      type: 'BLAHBLAH'
    }
    deepFreeze(action)

    let initialState = appState(undefined, action)

    expect(initialState).toEqual({
      player1: {
        icon: 'X',
        name: 'Player 1',
        score: 0
      },
      player2: {
        icon: 'O',
        name: 'Player 2',
        score: 0
      },
      currentPlayer: 1,
      currentGrid: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
    })
  })
})