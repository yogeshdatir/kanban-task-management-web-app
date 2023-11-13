import { HeaderContainer, PrimaryBtn } from './Header.styled';
import DropdownMenuIcon from '../../assets/icon-vertical-ellipsis.svg?react';

const Header = () => {
  return (
    <HeaderContainer>
      <span className="page-title">Platform Launch</span>
      <PrimaryBtn className="margin-left-auto">+ Add New Task</PrimaryBtn>
      <div className="dropdown-icon-wrapper">
        <DropdownMenuIcon />
      </div>
    </HeaderContainer>
  );
};

export default Header;
