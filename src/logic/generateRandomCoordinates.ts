import Coordinates from "models/Coordinates";

const hasCoordinates = (
  allCoordinates: Coordinates[],
  targetCoordinates: Coordinates
) => {
  for (let coordinates of allCoordinates) {
    if (
      coordinates[0] === targetCoordinates[0] &&
      coordinates[1] === targetCoordinates[1]
    ) {
      return true;
    }
  }

  return false;
}

const generateRandomCoordinates = (
  boardWidth: number,
  boardHeight: number,
  excludedArea: Coordinates[]
) => {
  while (true) {
    const randomCoordinates: Coordinates = [
      Math.floor(Math.random() * boardHeight),
      Math.floor(Math.random() * boardWidth)
    ];

    if (!hasCoordinates(excludedArea, randomCoordinates)) {
      return randomCoordinates;
    }
  }
};

export default generateRandomCoordinates;