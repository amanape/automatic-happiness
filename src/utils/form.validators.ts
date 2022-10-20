import lunhCheck from './lunhCheck';

/**
 * Returns an error message if the full name is invalid, otherwise returns an empty string.
 *
 * @example
 * fullNameValidator('John Doe Smith') // ''
 * fullNameValidator('John ') // 'Please enter your full name'
 * fullNameValidator('') // 'Please enter your full name'
 * fullNameValidator('John Doe Smith!') // 'Invalid characters'
 *
 * @param fullName The full name to validate.
 */
export const validateFullName = (fullName: string) => {
  const names = fullName.trim().split(' ');
  const validRegex = /^[a-zA-Z]+$/;

  if (names.length < 2) {
    return 'Please enter your full name';
  }
  if (names.some((name) => !validRegex.test(name))) {
    return 'Invalid characters';
  }

  return '';
};

/**
 * Returns an error message if the credit card number is invalid, otherwise returns an empty string.
 *
 * @example
 * creditCardValidator('4111111111111111') // ''
 * creditCardValidator('4111111111111112') // 'Invalid credit card number'
 * creditCardValidator('') // 'Please enter your credit card number'
 *
 * @param cardNumber The credit card number to validate.
 */
export const validateCreditCard = (cardNumber: string) => {
  if (!lunhCheck(cardNumber)) {
    return 'Invalid credit card number';
  }

  if (!cardNumber) {
    return 'Please enter your credit card number';
  }

  return '';
};

/**
 * Returns an error message if the expiry date is invalid, otherwise returns an empty string.
 *
 * @example
 * expiryDateValidator('12/25') // ''
 * expiryDateValidator('13/20') // 'Invalid month'
 * expiryDateValidator('12/18') // 'Invalid year'
 * expiryDateValidator('') // 'Please enter your expiry date'
 *
 * @param expiryDate The date to validate. In the form 'MM/YY'.
 */
export const validateExpiryDate = (expiryDate: string) => {
  const [month, year] = expiryDate.split('/').map((date) => parseInt(date, 10));

  if (!month || !year) {
    return 'Please enter the expiry date';
  }

  if (month < 1 || month > 12) {
    return 'Invalid month';
  }

  if (year < new Date().getFullYear() - 2000) {
    return 'Invalid year';
  }

  if (!expiryDate) {
    return 'Please enter the expiry date';
  }

  return '';
};
