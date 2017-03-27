import expect from 'expect'
import deepFreeze from 'deep-freeze'

import currentGrid from '../../reducers/currentGrid'

describe('undefined state', () => {
  it('should return initial state', () => {
    const action = {
      type: 'BLAHBLAH'
    }
    deepFreeze(action)

    let initialState = currentGrid(undefined, action)

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

    let newState = currentGrid(initialState, bogusAction)
    expect(newState).toEqual(initialState)
  })
})