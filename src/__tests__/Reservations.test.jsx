import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import Register from '../components/auth/Register';

describe('Register component', () => {
  test('Should render the proper Register component', () => {
    const registercomponent = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Register />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(registercomponent).toMatchSnapshot();
  });
});
