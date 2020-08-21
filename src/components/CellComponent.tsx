import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

import Cell from 'models/Cell'
import { handleCellClick } from 'redux/actions'

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
  handleCellClick: Function;
}

const StyledIcon = styled.i`
  font-size: 1.2em;
`;

const CellComponent = ({
  cell,
  handleCellClick
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
      onClick={() => {handleCellClick(cell)}}
      open={(cell.isOpen) ? true : false}
    >
      {content}
    </StyledCell>
  )
}

export default connect(
  null,
  {handleCellClick}
)(CellComponent);