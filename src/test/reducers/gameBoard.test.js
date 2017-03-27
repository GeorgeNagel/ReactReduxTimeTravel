import expect from 'expect'
import deepFreeze from 'deep-freeze'

import gameBoard from '../../reducers/gameBoard'
import { playPiece } from '../../actions'

describe('undefined state', () => {
  it('should return initial state', () => {
    let action = {
      type: 'BLAHBLAH'
    }
    deepFreeze(action)

    let initialState = gameBoard(undefined, action)

    expect(initialState).toEqual({
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      currentPlayer: 0
    })
  })
})

describe('bogus action', () => {
  it('should return the original state', () => {
    let bogusAction = {
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

describe('playPiece', () => {
  it("should play the piece if it's that player's turn", () => {
    let action = playPiece(1, 2)
    let initialState = {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      currentPlayer: 0
    }
    deepFreeze(action)
    deepFreeze(initialState)

    let newState = gameBoard(initialState, action)
    expect(newState).toEqual({
      board: [
        [null, null, null],
        [null, null, 0],
        [null, null, null]
      ],
      currentPlayer: 1
    })
  })
  it("should do nothing if the space is taken", () => {
    let action = playPiece(1, 2)
    let initialState = {
      board: [
        [null, null, null],
        [null, null, 1],
        [null, null, null]
      ],
      currentPlayer: 0
    }
    deepFreeze(action)
    deepFreeze(initialState)

    let newState = gameBoard(initialState, action)
    expect(newState).toEqual(initialState)
  })
})