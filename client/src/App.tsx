import { useSelector } from 'react-redux';
import { DashboardContainer, RightContainer } from './App.styled';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
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
