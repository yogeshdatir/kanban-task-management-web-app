import { combineReducers, configureStore } from '@reduxjs/toolkit';
import boardReducer from './boardSlice';

const rootReducer = combineReducers({
  boardsState: boardReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
