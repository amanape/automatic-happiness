import lunhCheck from './lunhCheck';

describe('lunhCheck', () => {
  it('should return true if the credit card number is valid', () => {
    expect(lunhCheck('4111111111111111')).toBe(true);
    expect(lunhCheck('5105105105105100')).toBe(true);
  });

  it('should return false if the credit card number is invalid', () => {
    expect(lunhCheck('4111111111111112')).toBe(false);
    expect(lunhCheck('5105105105105106')).toBe(false);
  });
});
