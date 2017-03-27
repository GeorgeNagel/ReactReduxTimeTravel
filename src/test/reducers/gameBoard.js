import expect from 'expect'
import deepFreeze from 'deep-freeze'

import gameBoard from '../../reducers/gameBoard'

describe('undefined state', () => {
  it('should return initial state', () => {
    const action = {
      type: 'BLAHBLAH'
    }
    deepFreeze(action)

    let initialState = gameBoard(undefined, action)

    expect(initialState).toEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null]
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

    let newState = gameBoard(initialState, bogusAction)
    expect(newState).toEqual(initialState)
  })
})