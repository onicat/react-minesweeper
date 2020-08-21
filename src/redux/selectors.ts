import Store from 'models/Store'

export const getBoard = (store: Store) => store.board;
export const getSettings = (store: Store) => store.settings;
export const getStage = (store: Store) => store.stage;
export const getFlagsRemaining = (store: Store) => store.flagsRemaining;