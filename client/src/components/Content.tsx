import { DragDropContext } from 'react-beautiful-dnd';
import {
  BoardContainer,
  ContentContainer,
  EmptyStateContainer,
} from './Content.styled';
import { PrimaryBtn } from './Header.styled';
import { useSelector } from 'react-redux';
import { AppState } from '../react-redux/store';
import { TBoard, TColumn } from '../types';
import Column from './Column';

const Content = () => {
  const { boards, selectedBoardName } = useSelector((state: AppState) => {
    return state.boardsState;
  });

  const selectedBoard: TBoard | undefined = boards.find(
    (board: TBoard) => board.name === selectedBoardName
  );

  const onDragEnd = () => {
    // It is the responsibility of this responder to synchronously apply changes that has resulted from the drag
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ContentContainer>
        {selectedBoard ? (
          <BoardContainer>
            {selectedBoard.columns.map((column: TColumn) => {
              return <Column key={column.name} column={column} />;
            })}
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
