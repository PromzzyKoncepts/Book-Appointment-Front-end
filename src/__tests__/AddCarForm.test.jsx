import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import AddCarForm from '../components/AddCarForm';

describe('AddCarForm component', () => {
  test('Should render the proper AddCarForm component', () => {
    const addCarFormcomponent = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <AddCarForm />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(addCarFormcomponent).toMatchSnapshot();
  });
});
