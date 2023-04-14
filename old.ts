import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Game } from './types';
import gamesData from '../../games.json';

const initialState = {
  games: [] as Game[],
  status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
  error: null as string | null,
};

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {

    console.log("----- fetching games----");
    
  const response = await axios.get('https://gist.github.com/aclement-ikarusdev/5dd618bf13ac76cebfa08c0e3c99b677');
  return response.data as Game[];
});

export const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.games = action.payload;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default gameSlice.reducer;
