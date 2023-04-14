import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gamesSlice';

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export default store;
