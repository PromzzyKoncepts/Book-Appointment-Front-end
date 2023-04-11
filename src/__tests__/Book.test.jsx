import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import Book from '../pages/Book';

describe('Book Page', () => {
  test('Should render the proper Book Page', () => {
    const bookPage = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Book />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(bookPage).toMatchSnapshot();
  });
});
