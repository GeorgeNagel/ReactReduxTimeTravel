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
          icon: 'X',
          name: 'Player 1',
          score: 0
        },
        {
          icon: 'O',
          name: 'Player 2',
          score: 0
        }
      ],
      currentPlayer: 0,
      currentGrid: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
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
      currentPlayer: 123,
      currentGrid: 'barbaz'
    }
    deepFreeze(bogusAction)
    deepFreeze(initialState)

    let newState = appState(initialState, bogusAction)
    expect(newState).toEqual(initialState)
  })
})