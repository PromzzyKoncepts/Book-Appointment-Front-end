import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import Login from '../components/auth/Login';

describe('Login component', () => {
  test('Should render the proper CarDetails component', () => {
    const loginComponent = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Login />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(loginComponent).toMatchSnapshot();
  });
});
