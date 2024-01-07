import { HeaderContainer, PrimaryBtn } from './Header.styled';
import DropdownMenuIcon from '../../assets/icon-vertical-ellipsis.svg?react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../react-redux/store';
import { useState } from 'react';
import PopupModal from './PopupModal';
import TaskForm from './forms/TaskForm';
import DropdownMenu from './dropdownMenu/DropdownMenu';
import BoardForm from './forms/BoardForm';
import { deleteBoard, selectBoard } from '../react-redux/boardSlice';
import ConfirmationModal from './forms/ConfirmationModal';
import { TBoard } from '../types';

const Header = () => {
  const { boards, selectedBoardName } = useSelector((state: AppState) => {
    return state.boardsState;
  });

  const [showTaskFormModal, setShowTaskFormModal] = useState<boolean>(false);
  const [showBoardFormModal, setShowBoardFormModal] = useState<boolean>(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <span className="page-title">{selectedBoardName}</span>
      <PrimaryBtn
        className="margin-left-auto"
        onClick={() => {
          setShowTaskFormModal(true);
        }}
      >
        + Add New Task
      </PrimaryBtn>
      <div className="dropdown-icon-wrapper">
        <DropdownMenu
          dropdownMenuIcon={<DropdownMenuIcon />}
          options={[
            { value: 'editBoard', displayValue: 'Edit Board' },
            {
              value: 'deleteBoard',
              displayValue: 'Delete Board',
              style: { color: '#EA5555' },
            },
          ]}
          onChange={(value) => {
            switch (value) {
              case 'editBoard':
                setShowBoardFormModal(true);
                break;

              case 'deleteBoard':
                setShowConfirmationModal(true);
                break;

              default:
                break;
            }
          }}
        />
      </div>
      {showTaskFormModal && (
        <PopupModal>
          <TaskForm setShowFormModal={setShowTaskFormModal} />
        </PopupModal>
      )}
      {showBoardFormModal && (
        <PopupModal>
          <BoardForm
            setShowBoardFormModal={setShowBoardFormModal}
            isEdit={true}
          />
        </PopupModal>
      )}
      {showConfirmationModal && (
        <ConfirmationModal
          setShowConfirmationModal={setShowConfirmationModal}
          onConfirm={() => {
            let nextBoardIndex = boards.findIndex((board: TBoard) => {
              return board.name === selectedBoardName;
            });
            if (nextBoardIndex === boards.length - 1) {
              nextBoardIndex = nextBoardIndex - 1;
            } else {
              nextBoardIndex = nextBoardIndex + 1;
            }
            dispatch(
              selectBoard(nextBoardIndex < 0 ? '' : boards[nextBoardIndex].name)
            );
            dispatch(deleteBoard(selectedBoardName));
          }}
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
