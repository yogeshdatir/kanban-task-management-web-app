import { useSelector } from 'react-redux';
import { DashboardContainer, RightContainer } from './App.styled';
import Content from './features/content/Content';
import Header from './features/header/Header';
import Sidebar from './features/sidebar/Sidebar';
import { AppState } from './react-redux/store';

const App = () => {
  const { boards } = useSelector((state: AppState) => {
    return state.boardsState;
  });

  return (
    <DashboardContainer>
      <Sidebar />
      <RightContainer>
        {!!boards.length && <Header />}
        <Content />
      </RightContainer>
    </DashboardContainer>
  );
};

export default App;
