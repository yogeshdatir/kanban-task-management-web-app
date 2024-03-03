import { createSlice } from '@reduxjs/toolkit';
import { TBoard, TBoards, TColumn, TTask } from '../types';
import dummyBoards from '../../data.json';
import { DropResult } from '@hello-pangea/dnd';

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
    updateBoard: (state, action) => {
      const updatedBoardIndex = state.boards.findIndex(
        (board) => board.name === action.payload.name
      );
      state.boards[updatedBoardIndex] = action.payload;

      return state;
    },
    deleteBoard: (state, action) => {
      state.boards = state.boards.filter(
        (board) => board.name !== action.payload
      );

      return state;
    },
    updateBoardList: (state, action) => {
      state.boards = action.payload;
      return state;
    },
    updateTaskList: (state, action) => {
      const board: TBoard | undefined = state.boards.find(
        (board: TBoard) => board.name === state.selectedBoardName
      );

      if (board) {
        const { source, destination } = <DropResult>action.payload;

        if (source.droppableId !== destination?.droppableId) {
          let sourceColumnIndex;
          let sourceColumn: TColumn | undefined = board.columns.find(
            (column: TColumn, index: number) => {
              if (column.name === source.droppableId) {
                sourceColumnIndex = index;
                return true;
              }
              return false;
            }
          );
          let destColumnIndex;
          let destColumn: TColumn | undefined = board.columns.find(
            (column: TColumn, index: number) => {
              if (column.name === destination?.droppableId) {
                destColumnIndex = index;
                return true;
              }
              return false;
            }
          );
          const sourceTasks = sourceColumn ? [...sourceColumn.tasks] : [];
          const destTasks = destColumn ? [...destColumn.tasks] : [];
          const [removed] = sourceTasks.splice(source.index, 1);
          destination && destTasks.splice(destination.index, 0, removed);

          if (
            sourceColumn &&
            destColumn &&
            sourceColumnIndex !== undefined &&
            destColumnIndex !== undefined
          ) {
            sourceColumn = {
              ...sourceColumn,
              tasks: sourceTasks,
            };

            destColumn = {
              ...destColumn,
              tasks: destTasks,
            };

            board.columns[sourceColumnIndex] = sourceColumn;
            board.columns[destColumnIndex] = destColumn;
          }
        } else {
          let sourceColumnIndex;
          let sourceColumn: TColumn | undefined = board.columns.find(
            (column: TColumn, index: number) => {
              if (column.name === source.droppableId) {
                sourceColumnIndex = index;
                return true;
              }
              return false;
            }
          );
          const copiedTasks = sourceColumn ? [...sourceColumn.tasks] : [];
          const [removed] = copiedTasks.splice(source.index, 1);
          copiedTasks.splice(destination.index, 0, removed);

          if (sourceColumn && sourceColumnIndex !== undefined) {
            sourceColumn = {
              ...sourceColumn,
              tasks: copiedTasks,
            };

            board.columns[sourceColumnIndex] = sourceColumn;
          }
        }
      }
    },
    updateTask: (state, action) => {
      let updatedBoardIndex = -1,
        updatedColumnIndex = -1,
        updatedTaskIndex = -1;

      state.boards.forEach((board: TBoard, index: number) => {
        if (board.name === state.selectedBoardName) {
          updatedBoardIndex = index;
          board.columns.forEach((column: TColumn, index: number) => {
            if (
              column.name.toLowerCase() ===
              action.payload.column.name.toLowerCase()
            ) {
              updatedColumnIndex = index;
              if (
                column.name.toLowerCase() ===
                action.payload.column.name.toLowerCase()
              ) {
                updatedColumnIndex = index;
                column.tasks.forEach((task: TTask, index: number) => {
                  if (task.title === action.payload.newTask.title) {
                    updatedTaskIndex = index;
                    return;
                  }
                });
              }
            }
          });
        }
      });

      if (updatedBoardIndex > -1 && updatedColumnIndex > -1) {
        state.boards[updatedBoardIndex].columns[updatedColumnIndex].tasks[
          updatedTaskIndex
        ] = action.payload.newTask;
      }

      return state;
    },
    addTask: (state, action) => {
      let updatedBoardIndex = -1;
      const updatedColumnIndex = 0;

      state.boards.forEach((board: TBoard, index: number) => {
        if (board.name === state.selectedBoardName) {
          updatedBoardIndex = index;
        }
      });

      if (updatedBoardIndex > -1 && updatedColumnIndex > -1) {
        state.boards[updatedBoardIndex].columns[updatedColumnIndex].tasks.push(
          action.payload
        );
      }

      return state;
    },
  },
});

export const {
  addBoard,
  selectBoard,
  updateBoard,
  deleteBoard,
  updateBoardList,
  updateTaskList,
  updateTask,
  addTask
} = boardSlice.actions;

export default boardSlice.reducer;
