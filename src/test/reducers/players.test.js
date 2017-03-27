import expect from 'expect'
import deepFreeze from 'deep-freeze'

import players from '../../reducers/players'

describe('undefined state', () => {
  it('should return initial state', () => {
    const action = {
      type: 'BLAHBLAH'
    }
    deepFreeze(action)

    let initialState = players(undefined, action)

    expect(initialState).toEqual([
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
    ])
  })
})

describe('bogus action', () => {
  it('should return the original state', () => {
    const bogusAction = {
      type: 'BOGUS'
    }
    let initialState = {
      foo: 'bar'
    }
    deepFreeze(bogusAction)
    deepFreeze(initialState)

    let newState = players(initialState, bogusAction)
    expect(newState).toEqual(initialState)
  })
})