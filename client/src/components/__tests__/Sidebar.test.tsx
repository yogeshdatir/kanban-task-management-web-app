import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Sidebar from '../Sidebar';
import { Provider } from 'react-redux';
import { DashboardContainer } from '../../App.styled';
import store from '../../react-redux/store';

describe('Sidebar ', () => {
  test('should render', () => {
    render(
      <Provider store={store}>
        <DashboardContainer>
          <Sidebar />
        </DashboardContainer>
      </Provider>
    );

    // screen.logTestingPlaygroundURL();
    expect(screen.getByText(/\+ create new boards/i));
  });
});
