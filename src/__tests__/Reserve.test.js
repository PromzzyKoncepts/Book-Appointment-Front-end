import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import Reserve from '../pages/Reserve';
import store from '../redux/configureStore';

describe('Reserve', () => {
  it('renders the Reserve component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Reserve />
      </Provider>,
    );

    expect(getByText('Reserve')).toBeInTheDocument();
  });

  it('submits the form', async () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <Reserve />
      </Provider>,
    );

    const cityInput = getByLabelText('city');
    const submitButton = getByText('Reserve Now');

    fireEvent.change(cityInput, { target: { value: 'New York' } });
    fireEvent.click(submitButton);

    // Add assertions to check that the reservation was created successfully
  });
});
