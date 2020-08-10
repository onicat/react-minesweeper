import React from 'react'
import { connect } from 'react-redux';

import { getBoard } from 'redux/selectors';
import Board from 'models/Board';
import Store from 'models/Store';
import CellComponent from './CellComponent';
import RowComponent from './RowComponent';

interface BoardComponentProps {
  board: Board;
  width: number;
  height: number;
}

const BoardComponent = ({
  board,
  width,
  height
}: BoardComponentProps) => {
  const renderRows = () => {
    const rows = [];

    for (let rowIndex = 0; rowIndex < height; rowIndex++) {
      const cells = [];

      for (let cellIndex = 0; cellIndex < width; cellIndex++) {
        const cell = board[rowIndex][cellIndex];
        
        cells.push(
          <CellComponent 
            cell={cell}
            key={cellIndex}
          />
        );
      }

      rows.push(
        <RowComponent
          cells={cells}
          key={rowIndex}
        />
      );
    }

    return rows;
  };
  
  return (
    <table>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state: Store) => ({
  board: getBoard(state)
});

export default connect(
  mapStateToProps
)(BoardComponent);