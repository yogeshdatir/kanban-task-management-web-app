import { SidebarContainer } from './Sidebar.styled';
import KanBanLogo from '../../assets/logo-light.svg?react';
import { useDispatch, useSelector } from 'react-redux';
import { TBoard } from '../types';
import { AppState } from '../react-redux/store';
import { selectBoard } from '../react-redux/boardSlice';
import { useState } from 'react';
import PopupModal from './PopupModal';
import BoardForm from './forms/BoardForm';

const Sidebar = () => {
  const { boards, selectedBoardName } = useSelector((state: AppState) => {
    return state.boardsState;
  });
  const dispatch = useDispatch();

  const [showBoardFormModal, setShowBoardFormModal] = useState<boolean>(false);

  return (
    <SidebarContainer>
      <div className="logo-container">
        <KanBanLogo />
      </div>
      <div className="menu-container">
        <span className="menu-header">{`all boards (${boards.length})`}</span>
        {boards.map((board: TBoard) => {
          return (
            <a
              className={`menu-item${
                selectedBoardName === board.name ? ' selected' : ''
              }`}
              key={board.name}
              onClick={() => {
                dispatch(selectBoard(board.name));
              }}
            >
              {board.name}
            </a>
          );
        })}
        <a
          className="menu-action-button"
          onClick={() => {
            setShowBoardFormModal(true);
          }}
        >
          + Create New Board
        </a>
      </div>
      {showBoardFormModal && (
        <PopupModal>
          <BoardForm setShowBoardFormModal={setShowBoardFormModal} />
        </PopupModal>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
