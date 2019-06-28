import React from 'react';

const Piece = (props) => {
  return (
    <td className={'c' + props.colIndex + ' p' + props.piece} id={'r' + props.rowIndex + 'c' + props.colIndex} onClick={props.handleOnClick}></td>
  )
}

export default Piece;