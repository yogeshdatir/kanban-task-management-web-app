import { createSlice } from '@reduxjs/toolkit';
import { TBoards } from '../types';
import dummyBoards from '../../data.json';

const initialState: TBoards = {
  boards: dummyBoards.boards,
  selectedBoardName: dummyBoards.boards[0].name,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    selectBoard: (state, action) => {
      state.selectedBoardName = action.payload;
      return state;
    },
    addBoard: (state, action) => {
      state.boards.push(action.payload);
      return state;
    },
  },
});

export const { addBoard, selectBoard } = boardSlice.actions;

export default boardSlice.reducer;
