import expect from 'expect'
import deepFreeze from 'deep-freeze'

import currentPlayer from '../../reducers/currentPlayer'

describe('undefined state', () => {
  it('should return initial state', () => {
    const action = {
      type: 'BLAHBLAH'
    }
    deepFreeze(action)

    let initialState = currentPlayer(undefined, action)

    expect(initialState).toEqual(0)
  })
})

describe('bogus action', () => {
  it('should return the original state', () => {
    const bogusAction = {
      type: 'BOGUS'
    }
    let initialState = 1
    deepFreeze(bogusAction)
    deepFreeze(initialState)

    let newState = currentPlayer(initialState, bogusAction)
    expect(newState).toEqual(initialState)
  })
})