import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import {
  BoardContainer,
  ContentContainer,
  EmptyStateContainer,
  NewColumn,
} from './Content.styled';
import { PrimaryBtn } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../react-redux/store';
import { TBoard, TColumn } from '../types';
import Column from './Column';
import { updateTaskList } from '../react-redux/boardSlice';

const Content = () => {
  const { boards, selectedBoardName } = useSelector((state: AppState) => {
    return state.boardsState;
  });

  const dispatch = useDispatch();

  const selectedBoard: TBoard | undefined = boards.find(
    (board: TBoard) => board.name === selectedBoardName
  );

  const onDragEnd = (result: DropResult) => {
    // It is the responsibility of this responder to synchronously apply changes that has resulted from the drag

    if (!result.destination) return;
    dispatch(updateTaskList(result));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ContentContainer>
        {selectedBoard && selectedBoard.columns.length ? (
          <BoardContainer>
            {selectedBoard.columns.map((column: TColumn) => {
              return <Column key={column.name} column={column} />;
            })}
            <NewColumn>
              <p>+ New Column</p>
            </NewColumn>
          </BoardContainer>
        ) : (
          <EmptyStateContainer>
            <p>This board is empty. Create a new column to get started.</p>
            <PrimaryBtn>+ Add New Task</PrimaryBtn>
          </EmptyStateContainer>
        )}
      </ContentContainer>
    </DragDropContext>
  );
};

export default Content;
