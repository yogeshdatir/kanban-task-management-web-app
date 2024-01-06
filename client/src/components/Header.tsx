import { HeaderContainer, PrimaryBtn } from './Header.styled';
import DropdownMenuIcon from '../../assets/icon-vertical-ellipsis.svg?react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../react-redux/store';
import { useState } from 'react';
import PopupModal from './PopupModal';
import TaskForm from './forms/TaskForm';
import DropdownMenu from './dropdownMenu/DropdownMenu';
import BoardForm from './forms/BoardForm';
import { deleteBoard } from '../react-redux/boardSlice';

const Header = () => {
  const { selectedBoardName } = useSelector((state: AppState) => {
    return state.boardsState;
  });

  const [showTaskFormModal, setShowTaskFormModal] = useState<boolean>(false);
  const [showBoardFormModal, setShowBoardFormModal] = useState<boolean>(false);

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
                dispatch(deleteBoard(selectedBoardName));
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
          <BoardForm setShowFormModal={setShowBoardFormModal} isEdit={true} />
        </PopupModal>
      )}
    </HeaderContainer>
  );
};

export default Header;
