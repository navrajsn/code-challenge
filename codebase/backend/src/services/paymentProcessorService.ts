import { PaymentRequest } from '../types';

export const processPayment = (payment: PaymentRequest): boolean => {
  // Validate credit card number (basic Luhn algorithm check)
  const isValidCreditCardNumber = (cardNumber: string): boolean => {
    const sanitized = cardNumber.replace(/\D/g, ''); // Remove non-digit characters
    let sum = 0;
    let shouldDouble = false;

    for (let i = sanitized.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitized[i], 10);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  // Validate expiry date (format MM/YY and not expired)
  const isValidExpiryDate = (expiryDate: string): boolean => {
    const [month, year] = expiryDate.split('/').map((part) => parseInt(part, 10));
    if (!month || !year || month < 1 || month > 12) return false;

    const currentDate = new Date();
    const currentYear = parseInt(currentDate.getFullYear().toString().slice(-2), 10);
    const currentMonth = currentDate.getMonth() + 1;

    return year > currentYear || (year === currentYear && month >= currentMonth);
  };

  // Validate CVV (3 or 4 digits)
  const isValidCVV = (cvv: string): boolean => {
    return /^\d{3,4}$/.test(cvv);
  };

  // Validate accountId
  const isValidAccountId = (accountId: string): boolean => {
    return accountId.trim().length > 0; // Ensure accountId is not empty
  };

  // Perform validations
  if (
    isValidAccountId(payment.accountId) &&
    isValidCreditCardNumber(payment.creditCardNumber) &&
    isValidExpiryDate(payment.expiryDate) &&
    isValidCVV(payment.cvv)
  ) {
    return true; // Payment successful
  }

  return false; // Payment failed
};