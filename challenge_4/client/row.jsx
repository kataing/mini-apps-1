import React from 'react';
import RowCol from './rowCol.jsx';

const Row = (props) => {
  return (
    <tr>
      {props.row.map((rowCol, key) => {
        return (
          <RowCol key={key} rowCol={rowCol} handleOnClick={props.handleOnClick}/>
        )
      })}
    </tr>
  )
}

export default Row;