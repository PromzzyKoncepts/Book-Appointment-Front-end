import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import Sidenav from '../components/navbar/Sidenav';

describe('SideNav component', () => {
  test('Should render the proper SideNav component', () => {
    const sideNavcomponent = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Sidenav />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(sideNavcomponent).toMatchSnapshot();
  });
});
