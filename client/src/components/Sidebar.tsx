import { SidebarContainer } from './Sidebar.styled';
import KanBanLogo from '../../assets/logo-light.svg?react';
import { useDispatch, useSelector } from 'react-redux';
import { TBoard } from '../types';
import { AppState } from '../react-redux/store';
import { selectBoard } from '../react-redux/boardSlice';

const Sidebar = () => {
  const { boards, selectedBoardName } = useSelector((state: AppState) => {
    return state.boardsState;
  });
  const dispatch = useDispatch();

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
        <a className="menu-action-button">+ Create New Board</a>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
