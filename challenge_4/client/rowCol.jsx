import React from 'react';

const RowCol = (props) => {
  return (
    <td onClick={props.handleOnClick}>{props.rowCol}</td>
  )
}

export default RowCol;