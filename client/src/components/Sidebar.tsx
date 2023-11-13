import { SidebarContainer } from './Sidebar.styled';
import KanBanLogo from '../../assets/logo-dark.svg?react';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="logo-container">
        <KanBanLogo />
      </div>
      <div className="menu-container">
        <a className="menu-header">all boards (8)</a>
        <a className="menu-item selected">Platform Launch</a>
        <a className="menu-item">Marketing Plan</a>
        <a className="menu-item">Roadmap</a>
        <a className="menu-action-button">+ Create New Board</a>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
