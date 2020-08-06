import BoardCreator from 'logic/creators/BoardCreator'

const boardCreator = new BoardCreator();
const initialState = boardCreator.create(8, 8);


const board = (state = initialState) => {
  return state;
};

export default board;