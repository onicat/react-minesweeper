import React from 'react'
import styled from 'styled-components'

import Cell from 'models/Cell'

const StyledCell = styled.td<{
  open?: boolean,
  onClick: Function
}>`
  width: 30px;
  height: 30px;
  background-color: ${({open}) => (open) ? '#1976d2' : '#2196f3'};
  box-shadow: inset 0 -3px #1976d2;
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
    }

    if (cell.status === -1) {
      content = <StyledIcon className='fas fa-bomb'/>
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