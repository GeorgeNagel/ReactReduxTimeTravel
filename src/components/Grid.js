import React, { Component } from 'react'

import GridCell from '../containers/GridCell'

class Grid extends Component {
  render() {
    return(
      <div>
        <h3>Grid</h3>
        <table>
          <tbody>
            <tr>
              <GridCell row={0} column={0}/>
              <GridCell row={0} column={1}/>
              <GridCell row={0} column={2}/>
            </tr>
            <tr>
              <GridCell row={1} column={0}/>
              <GridCell row={1} column={1}/>
              <GridCell row={1} column={2}/>
            </tr>
            <tr>
              <GridCell row={2} column={0}/>
              <GridCell row={2} column={1}/>
              <GridCell row={2} column={2}/>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default Grid