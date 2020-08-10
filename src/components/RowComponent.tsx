import React from 'react'

interface RowComponentProps {
  cells: JSX.Element[]
}

const RowComponent = ({
  cells
}: RowComponentProps) => {
  return <tr>{cells}</tr>
};

export default RowComponent;