import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { PrimaryBtn } from '../header/Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../react-redux/store';
import { TBoard, TColumn } from '../../types';
import Column from '../../components/Column';
import { updateTaskList } from '../../react-redux/boardSlice';
import { useState } from 'react';
import PopupModal from '../../components/PopupModal';
import BoardForm from '../boards/BoardForm';
import {
  ContentContainer,
  BoardContainer,
  NewColumn,
  EmptyStateContainer,
} from './Content.styled';

const Content = () => {
  const { boards, selectedBoardName } = useSelector((state: AppState) => {
    return state.boardsState;
  });

  const [showBoardFormModal, setShowBoardFormModal] = useState<boolean>(false);

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
    <>
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
          ) : boards.length ? (
            <EmptyStateContainer>
              <p>This board is empty. Create a new column to get started.</p>
              <PrimaryBtn>+ Add New Column</PrimaryBtn>
            </EmptyStateContainer>
          ) : (
            <EmptyStateContainer>
              <p>
                There are no boards available. Create a new board to get
                started.
              </p>
              <PrimaryBtn onClick={() => setShowBoardFormModal(true)}>
                + Create New Board
              </PrimaryBtn>
            </EmptyStateContainer>
          )}
        </ContentContainer>
      </DragDropContext>

      {showBoardFormModal && (
        <PopupModal>
          <BoardForm setShowBoardFormModal={setShowBoardFormModal} />
        </PopupModal>
      )}
    </>
  );
};

export default Content;
