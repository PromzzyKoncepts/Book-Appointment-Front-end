import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Reserve from '../pages/Reserve';
import store from '../redux/store';



describe('Reserve', () => {
  it('should submit reservation data when form is submitted', async () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Reserve />
        </MemoryRouter>
      </Provider>,
    );

    // Select a car from the dropdown
    const carDropdown = getByLabelText('Select label');
    fireEvent.change(carDropdown, { target: { value: '2' } });

    // Fill in the city input
    const cityInput = getByLabelText('city');
    fireEvent.change(cityInput, { target: { value: 'New York' } });

    // Submit the form
    const submitBtn = getByText('Reserve Now');
    fireEvent.click(submitBtn);

    // Wait for the reservation to be created
    await waitFor(() => {
      expect(store.getState().reservations.reservations.length).toBe(1);
    });
  });
});
