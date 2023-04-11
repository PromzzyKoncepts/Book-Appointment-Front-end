import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import Car from '../components/Car';

describe('Car component', () => {
  test('Should render the proper Car component', () => {
    const carcomponent = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Car />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(carcomponent).toMatchSnapshot();
  });
});