import Coordinates from "models/Coordinates";

interface BoardSizes {
  width: number;
  height: number
}

const getArea = (
  targetCoordinates: Coordinates,
  boardSizes: BoardSizes,
  includeCenter = true
): Coordinates[] => {
  const area: Coordinates[] = [];
  
  for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
    const rowIndex = targetCoordinates[0] + rowOffset;
    
    if (rowIndex < 0 || rowIndex >= boardSizes.height) continue; 

    for (let colOffset = -1; colOffset <= 1; colOffset++) {
      const colIndex = targetCoordinates[1] + colOffset;

      if (colIndex < 0 || colIndex >= boardSizes.width) continue;
      if (rowOffset === 0 && colOffset === 0 && !includeCenter) continue; 

      area.push([rowIndex, colIndex]);
    }
  }

  return area;
};

export default getArea;