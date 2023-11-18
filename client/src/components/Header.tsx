import { HeaderContainer, PrimaryBtn } from './Header.styled';
import DropdownMenuIcon from '../../assets/icon-vertical-ellipsis.svg?react';
import { useSelector } from 'react-redux';
import { AppState } from '../react-redux/store';

const Header = () => {
  const { selectedBoardName } = useSelector((state: AppState) => {
    return state.boardsState;
  });

  return (
    <HeaderContainer>
      <span className="page-title">{selectedBoardName}</span>
      <PrimaryBtn className="margin-left-auto">+ Add New Task</PrimaryBtn>
      <div className="dropdown-icon-wrapper">
        <DropdownMenuIcon />
      </div>
    </HeaderContainer>
  );
};

export default Header;
