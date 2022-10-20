import { validateFullName, validateCreditCard, validateExpiryDate } from './form.validators';

describe('fullNameValidator', () => {
  it('should return an empty string if the full name is valid', () => {
    const result = validateFullName('John Doe Smith');
    expect(result).toBe('');
  });

  it('should return an error message if there is only one name', () => {
    const result = validateFullName('John');
    expect(result).toEqual('Please enter your full name');
  });

  it('should return an error message if there is no text', () => {
    const result = validateFullName('');
    expect(result).toEqual('Please enter your full name');
  });

  it('should return an error message if there are illegal characters', () => {
    const result = validateFullName('John Doe Smith!');
    expect(result).toEqual('Invalid characters');
  });
});

describe('creditCardValidator', () => {
  it('should return an empty string if the credit card number is valid', () => {
    const result = validateCreditCard('4111111111111111');
    expect(result).toBe('');
  });

  it('should return an error message if the credit card number is invalid', () => {
    const result = validateCreditCard('4111111111111112');
    expect(result).toEqual('Invalid credit card number');
  });

  it('should return an error message if the credit card number is empty', () => {
    const result = validateCreditCard('');
    expect(result).toEqual('Please enter your credit card number');
  });
});

describe('expiryDateValidator', () => {
  it('should return an empty string if the expiry date is valid', () => {
    const result = validateExpiryDate('12/25');
    expect(result).toBe('');
  });

  it('should return an error message if the month is out of range', () => {
    const result = validateExpiryDate('13/20');
    expect(result).toEqual('Invalid month');
  });

  it('should return an error message if the year is in the past', () => {
    const result = validateExpiryDate('12/19');
    expect(result).toEqual('Invalid year');
  });

  it('should return an error message if incomplete', () => {
    const result = validateExpiryDate('12/');
    expect(result).toEqual('Please enter the expiry date');
  });

  it('should return an error message if the expiry date is empty', () => {
    const result = validateExpiryDate('');
    expect(result).toEqual('Please enter the expiry date');
  });
});
