import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { PrimaryBtn } from '../header/Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../react-redux/store';
import { TBoard, TColumn } from '../../types';
import Column from '../boards/Column';
import { updateTaskList } from '../../react-redux/boardSlice';
import { useState } from 'react';
import PopupModal from '../../components/PopupModal';
import BoardForm from '../boards/BoardForm';
import {
  ContentContainer,
  BoardContainer,
  NewColumn,
  EmptyStateContainer,
  ShowSidebarFloater,
} from './Content.styled';
import ShowSidebarIcon from '../../../assets/icon-show-sidebar.svg?react';

type Props = {
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
};

const Content = ({ showSidebar, setShowSidebar }: Props) => {
  const { boards, selectedBoardName } = useSelector((state: AppState) => {
    return state.boardsState;
  });

  const [showBoardFormModal, setShowBoardFormModal] = useState<boolean>(false);
  const [editBoard, setEditBoard] = useState<boolean>(false);

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
              {selectedBoard.columns.map((column: TColumn, index: number) => {
                return (
                  <Column
                    key={column.name}
                    column={column}
                    index={index}
                    columnCount={selectedBoard.columns.length}
                  />
                );
              })}
              <NewColumn
                onClick={() => {
                  setEditBoard(true);
                  setShowBoardFormModal(true);
                }}
              >
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

      <ShowSidebarFloater
        showSidebar={showSidebar}
        onClick={() => {
          setShowSidebar(true);
        }}
      >
        <ShowSidebarIcon />
      </ShowSidebarFloater>

      {showBoardFormModal && (
        <PopupModal>
          <BoardForm
            setShowBoardFormModal={setShowBoardFormModal}
            isEdit={editBoard}
          />
        </PopupModal>
      )}
    </>
  );
};

export default Content;
