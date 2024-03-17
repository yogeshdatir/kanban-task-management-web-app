import { useSelector } from 'react-redux';
import { DashboardContainer, RightContainer } from './App.styled';
import Content from './features/content/Content';
import Header from './features/header/Header';
import Sidebar from './features/sidebar/Sidebar';
import { AppState } from './react-redux/store';
import { useState } from 'react';

const App = () => {
  const { boards } = useSelector((state: AppState) => {
    return state.boardsState;
  });

  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <DashboardContainer>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <RightContainer>
        {!!boards.length && <Header />}
        <Content showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </RightContainer>
    </DashboardContainer>
  );
};

export default App;
