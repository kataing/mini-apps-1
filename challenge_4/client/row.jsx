import React from 'react';
import RowCol from './rowCol.jsx';

const Row = (props) => {
  return (
    props.row.map((rowCol, key) => {
      return (
        <td className='piece' id={'c' + props.key}>
          <RowCol key={key} rowCol={rowCol} />
        </td>
      )
    })
  )
}

export default Row;