import React from 'react';
import RowCol from './rowCol.jsx';

const Row = (props) => {
  return (
    props.row.map((rowCol, key) => {
      return (
        <span id={'c' + props.key}>
          <RowCol key={key} rowCol={rowCol} />
        </span>
      )
    })
  )
}

export default Row;