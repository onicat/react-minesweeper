import React from 'react'

import Cell from 'models/Cell'
import CellComponent from './CellComponent';

interface RowComponentProps {
  row: Cell[];
}

const RowComponent = ({row}: RowComponentProps) => {
  const cells = [];

  for (let cellIndex = 0; cellIndex < row.length; cellIndex++) {
    cells.push(<CellComponent cell={row[cellIndex]}/>);
  }
  
  return (
    <tr>
      {cells}
    </tr>
  )
};

export default RowComponent;