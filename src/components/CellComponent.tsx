import React from 'react'
import styled from 'styled-components'

import Cell from 'models/Cell'

const StyledCell = styled.td`
  width: 30px;
  height: 30px;
  background-color: black
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