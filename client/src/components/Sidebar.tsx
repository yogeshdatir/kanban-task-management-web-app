import { SidebarContainer } from './Sidebar.styled';
import KanBanLogo from '../../assets/logo-dark.svg?react';
import { useDispatch, useSelector } from 'react-redux';
import { TBoard } from '../types';
import { AppState } from '../react-redux/store';
import { selectBoard } from '../react-redux/boardSlice';

const Sidebar = () => {
  const { boards, selectedBoard } = useSelector((state: AppState) => {
    return state.boardsState;
  });
  const dispatch = useDispatch();

  return (
    <SidebarContainer>
      <div className="logo-container">
        <KanBanLogo />
      </div>
      <div className="menu-container">
        <span className="menu-header">all boards (8)</span>
        {boards.map((board: TBoard) => {
          return (
            <a
              className={`menu-item${
                selectedBoard === board.name ? ' selected' : ''
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
        {/* <a className="menu-item selected">Platform Launch</a>
        <a className="menu-item">Marketing Plan</a>
        <a className="menu-item">Roadmap</a>
        <a className="menu-action-button">+ Create New Board</a> */}
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
