import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import DeleteCar from '../pages/DeleteCar';

describe('DeleteCar Page', () => {
  test('Should render the proper DeleteCar Page', () => {
    const deleteCarPage = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <DeleteCar />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(deleteCarPage).toMatchSnapshot();
  });
});
