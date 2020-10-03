import React from 'react'
import styled from 'styled-components';

import Cell from 'models/Cell'
import CellComponent from './CellComponent';

interface RowComponentProps {
  row: Cell[];
}

const StyledRowComponent = styled.tr`
  white-space: nowrap;
`;

const RowComponent = ({row}: RowComponentProps) => {
  const cells = [];

  for (let cellIndex = 0; cellIndex < row.length; cellIndex++) {
    cells.push(<CellComponent key={cellIndex} cell={row[cellIndex]}/>);
  }
  
  return (
    <StyledRowComponent>
      {cells}
    </StyledRowComponent>
  )
};

export default RowComponent;