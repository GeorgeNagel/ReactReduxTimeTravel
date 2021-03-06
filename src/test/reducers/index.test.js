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
      players: [
        {
          token: 'X',
          name: 'Player 1'
        },
        {
          token: 'O',
          name: 'Player 2'
        }
      ],
      gameBoard: {
        board: [
          [null, null, null],
          [null, null, null],
          [null, null, null]
        ],
        currentPlayer: 0
      }
    })
  })
})

describe('bogus action', () => {
  it('should return the original state', () => {
    const bogusAction = {
      type: 'BOGUS'
    }
    let initialState = {
      players: 'foobar',
      gameBoard: 'barbaz'
    }
    deepFreeze(bogusAction)
    deepFreeze(initialState)

    let newState = appState(initialState, bogusAction)
    expect(newState).toEqual(initialState)
  })
})