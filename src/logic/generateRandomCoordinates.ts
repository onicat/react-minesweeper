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
  excludeArea: Coordinates[]
) => {
  while (true) {
    const randomCoordinates: Coordinates = [
      Math.floor(Math.random() * (boardHeight + 1)),
      Math.floor(Math.random() * (boardWidth + 1))
    ];

    if (!hasCoordinates(excludeArea, randomCoordinates)) {
      return randomCoordinates;
    }
  }
};

export default generateRandomCoordinates;