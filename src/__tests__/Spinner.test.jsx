import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import Spinner from '../components/Spinner';

describe('Spinner component', () => {
  test('Should render the proper Spinner component', () => {
    const spinnercomponent = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Spinner />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(spinnercomponent).toMatchSnapshot();
  });
});
