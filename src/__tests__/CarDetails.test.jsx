import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import CarDetails from '../components/CarDetails';

describe('CarDetails component', () => {
  test('Should render the proper CarDetails component', () => {
    const carDetailscomponent = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <CarDetails />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(carDetailscomponent).toMatchSnapshot();
  });
});