import { HeaderContainer, PrimaryBtn } from './Header.styled';
import DropdownMenuIcon from '../../assets/icon-vertical-ellipsis.svg?react';
import { useSelector } from 'react-redux';
import { AppState } from '../react-redux/store';
import { useState } from 'react';
import PopupModal from './PopupModal';
import TaskForm from './forms/TaskForm';

const Header = () => {
  const { selectedBoardName } = useSelector((state: AppState) => {
    return state.boardsState;
  });

  const [showFormModal, setShowFormModal] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <span className="page-title">{selectedBoardName}</span>
      <PrimaryBtn
        className="margin-left-auto"
        onClick={() => {
          setShowFormModal(true);
        }}
      >
        + Add New Task
      </PrimaryBtn>
      <div className="dropdown-icon-wrapper">
        <DropdownMenuIcon />
      </div>
      {showFormModal && (
        <PopupModal>
          <TaskForm setShowFormModal={setShowFormModal} />
        </PopupModal>
      )}
    </HeaderContainer>
  );
};

export default Header;
