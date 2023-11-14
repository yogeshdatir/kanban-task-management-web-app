import { Provider } from 'react-redux';
import { DashboardContainer, RightContainer } from './App.styled';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import store from './react-redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <DashboardContainer>
        <Sidebar />
        <RightContainer>
          <Header />
          <Content />
        </RightContainer>
      </DashboardContainer>
    </Provider>
  );
};

export default App;
