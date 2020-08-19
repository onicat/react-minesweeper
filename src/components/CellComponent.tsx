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

const CellComponent = ({
  cell,
  getCellClickHandler
}: CellComponentProps) => {
  return (
    <StyledCell 
      onClick={getCellClickHandler(cell.coordinates)}
      open={(cell.isOpen) ? true : false}
    >
      {(cell.status > 0 && cell.isOpen) ? cell.status : null}
    </StyledCell>
  )
}

export default CellComponent;