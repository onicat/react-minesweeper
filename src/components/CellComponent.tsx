import React from 'react'
import styled from 'styled-components'

import Cell from 'models/Cell'

const StyledCell = styled.td<{
  open?: boolean,
  onClick: Function
}>`
  width: 30px;
  height: 30px;
  padding: 0;
  background-color: ${({open}) => (open) ? '#1976d2' : '#2196f3'};
  box-shadow: inset 0 -3px #1976d2;
  display: inline-block;
  margin: 1px;
`;

interface CellComponentProps {
  cell: Cell;
  getCellClickHandler: Function;
}

const StyledIcon = styled.i`
  font-size: 1.2em;
`;

const CellComponent = ({
  cell,
  getCellClickHandler
}: CellComponentProps) => {
  let content = null;

  if (cell.isOpen) {
    if (cell.status > 0) {
      content = cell.status;
    } else if (cell.status === -1) {
      content = <StyledIcon className='fas fa-bomb'/>;
    } else if (cell.status === -2) {
      content = <StyledIcon className='fab fa-gripfire'/>;
    }
  }

  return (
    <StyledCell 
      onClick={getCellClickHandler(cell.coordinates)}
      open={(cell.isOpen) ? true : false}
    >
      {content}
    </StyledCell>
  )
}

export default CellComponent;