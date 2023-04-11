import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import Reserve from '../pages/Reserve';

describe('Reserve Page', () => {
  test('Should render the proper Reserve Page', () => {
    const reservePage = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Reserve />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(reservePage).toMatchSnapshot();
  });
});
