import expect from 'expect'
import deepFreeze from 'deep-freeze'

import players from '../../reducers/players'
import { setPlayerName, setPlayerToken } from '../../actions'

describe('undefined state', () => {
  it('should return initial state', () => {
    const action = {
      type: 'BLAHBLAH'
    }
    deepFreeze(action)

    let initialState = players(undefined, action)

    expect(initialState).toEqual([
      {
        token: 'X',
        name: 'Player 1'
      },
      {
        token: 'O',
        name: 'Player 2'
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

describe('setPlayerName', () => {
  it('should set the player name', () => {
    const action = setPlayerName(0, 'Charles')
    let initialState = [
      {
        token: 'X',
        name: 'Player 1'
      },
      {
        token: 'O',
        name: 'Player 2'
      }
    ]
    deepFreeze(action)
    deepFreeze(initialState)

    let newState = players(initialState, action)
    expect(newState).toEqual([
      {
        token: 'X',
        name: 'Charles'
      },
      {
        token: 'O',
        name: 'Player 2'
      }
    ])
  })
})

describe('setPlayerToken', () => {
  it('should set the player name', () => {
    const action = setPlayerToken(0, '∆')
    let initialState = [
      {
        token: 'X',
        name: 'Player 1'
      },
      {
        token: 'O',
        name: 'Player 2'
      }
    ]
    deepFreeze(action)
    deepFreeze(initialState)

    let newState = players(initialState, action)
    expect(newState).toEqual([
      {
        token: '∆',
        name: 'Player 1'
      },
      {
        token: 'O',
        name: 'Player 2'
      }
    ])
  })
})