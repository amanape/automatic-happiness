/**
 * Checks whether a credit card number is valid using the Luhn algorithm.
 *
 * @see https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @example
 * lunhCheck('4111111111111111') // true
 * lunhCheck('4111111111111112') // false
 *
 * @param cardNumber The credit card number to validate.
 */
export default (cardNumber: string) => {
  const digits = cardNumber.split('').map((digit) => parseInt(digit, 10));

  const sum = digits.reduce((acc, digit, index) => {
    if (index % 2 === 0) {
      const doubled = digit * 2;
      return acc + (doubled > 9 ? doubled - 9 : doubled);
    }
    return acc + digit;
  }, 0);

  return sum % 10 === 0;
};
