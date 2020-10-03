import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

import Cell from 'models/Cell'
import { handleCellClick, handleFlagPlacing } from 'redux/actions'
import { cellStatuses } from 'logic/constants';
import flagImg from 'img/flag.png'
import mineImg from 'img/mine.png'
import explosionImg from 'img/explosion.png'

interface CellComponentProps {
  cell: Cell;
  handleCellClick: Function;
  handleFlagPlacing: Function;
}

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
  line-height: 30px;
  font-weight: lighter;
`;

const StyledIcon = styled.img`
  width: 20px;
  margin: 5px;
`;

const CellComponent = ({
  cell,
  handleCellClick,
  handleFlagPlacing
}: CellComponentProps) => {
  let content = null;

  if (cell.isFlagged) {
    content = <StyledIcon src={flagImg}/>;
  }

  if (cell.isOpen) {
    if (cell.status === cellStatuses.MINE) {
      content = <StyledIcon src={mineImg}/>;
    } else if (cell.status === cellStatuses.EXPLOSION) {
      content = <StyledIcon src={explosionImg}/>;
    } else if (cell.status !== cellStatuses.EMPTY) {
      content = cell.status;
    }
  }

  return (
    <StyledCell 
      onClick={() => handleCellClick(cell)}
      onContextMenu={() => handleFlagPlacing(cell)}
      open={(cell.isOpen) ? true : false}
    >
      {content}
    </StyledCell>
  )
}

export default connect(
  null,
  {handleCellClick, handleFlagPlacing}
)(CellComponent);