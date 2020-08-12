import React from 'react'
import styled from 'styled-components'

import Cell from 'models/Cell'

const StyledCell = styled.td`
  width: 30px;
  height: 30px;
  background-color: #2196f3;
  box-shadow: inset 0 -3px #1976d2;
`;

interface CellComponentProps {
  cell: Cell
}

const CellComponent = ({cell}: CellComponentProps) => {
  return (
    <StyledCell></StyledCell>
  )
}

export default CellComponent;