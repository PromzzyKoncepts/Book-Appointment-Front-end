import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import AddCar from '../pages/AddCar';

describe('AddCar Page', () => {
  test('Should render the proper AddCar Page', () => {
    const addCarPage = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <AddCar />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(addCarPage).toMatchSnapshot();
  });
});
