import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PaymentForm from './PaymentForm';

describe('PaymentForm', () => {
  describe('Error messages', () => {
    it('should display error message when full name is invalid', async () => {
      const { getByText, getByTestId } = render(<PaymentForm />);
      const fullNameInput = getByText(/full name/i).nextElementSibling as HTMLInputElement;

      // Message only appears after input has been touched
      await userEvent.click(fullNameInput);
      await userEvent.tab();

      await waitFor(() => {
        expect(getByTestId('full_name-error')).toBeTruthy();
      });
    });

    it('should display error message when card number is invalid', async () => {
      const { getByText, getByTestId } = render(<PaymentForm />);
      const cardNumberInput = getByText(/card number/i).nextElementSibling as HTMLInputElement;

      await userEvent.click(cardNumberInput);
      await userEvent.tab();

      await waitFor(() => {
        expect(getByTestId('card_number-error')).toBeTruthy();
      });
    });

    it('should display error message when expiration date is invalid', async () => {
      const { getByText, getByTestId } = render(<PaymentForm />);
      const expirationDateInput = getByText(/expiration/i).nextElementSibling as HTMLInputElement;

      await userEvent.click(expirationDateInput);
      await userEvent.tab();

      await waitFor(() => {
        expect(getByTestId('expiration_date-error')).toBeTruthy();
      });
    });

    it('should display error message when cvv is invalid', async () => {
      const { getByText, getByTestId } = render(<PaymentForm />);
      const cvvInput = getByText(/cvv/i).nextElementSibling as HTMLInputElement;

      await userEvent.click(cvvInput);
      await userEvent.tab();

      await waitFor(() => {
        expect(getByTestId('cvv-error')).toBeTruthy();
      });
    });

    it('should display error message when zip code is invalid', async () => {
      const { getByText, getByTestId } = render(<PaymentForm />);
      const zipCodeInput = getByText(/zip code/i).nextElementSibling as HTMLInputElement;

      await userEvent.click(zipCodeInput);
      await userEvent.tab();

      await waitFor(() => {
        expect(getByTestId('zip_code-error')).toBeTruthy();
      });
    });
  });
});
