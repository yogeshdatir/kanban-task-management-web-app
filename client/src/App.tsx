import { DashboardContainer, RightContainer } from './App.styled';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <RightContainer>
        <Header />
        <Content />
      </RightContainer>
    </DashboardContainer>
  );
};

export default App;
