import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Reservations from '../pages/Reservations';
import store from '../redux/configureStore';

describe('Reservations component', () => {
  test('renders the component', async () => {
    render(
      <Provider store={store}>
        <Reservations />
      </Provider>
    );
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.textContent).toBe('My Reservations');
    const tableHeaders = screen.getAllByRole('columnheader');
    expect(tableHeaders.length).toBe(3);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBeGreaterThan(1);
  });
});
