import { processPayment } from '../services/paymentProcessorService';

test('processPayment returns true for valid payment', () => {
  const payment = {
    accountId: '1',
    amount: 100,
    creditCardNumber: '4111111111111111',
    expiryDate: '12/25',
    cvv: '123'
  };
  expect(processPayment(payment)).toBe(true);
});

test('processPayment returns false for invalid payment', () => {
  // Invalid credit card number
  const invalidCardPayment = {
    accountId: '1',
    amount: 100,
    creditCardNumber: '1234567890123456',
    expiryDate: '12/25',
    cvv: '123'
  };
  expect(processPayment(invalidCardPayment)).toBe(false);

  // Invalid expiry date
  const invalidExpiryPayment = {
    accountId: '1',
    amount: 100,
    creditCardNumber: '4111111111111111',
    expiryDate: '01/20', // Expired date
    cvv: '123'
  };
  expect(processPayment(invalidExpiryPayment)).toBe(false);

  // Invalid CVV
  const invalidCvvPayment = {
    accountId: '1',
    amount: 100,
    creditCardNumber: '4111111111111111',
    expiryDate: '12/25',
    cvv: '12' // Invalid CVV
  };
  expect(processPayment(invalidCvvPayment)).toBe(false);

  // Missing accountId
  const missingAccountIdPayment = {
    accountId: '',
    amount: 100,
    creditCardNumber: '4111111111111111',
    expiryDate: '12/25',
    cvv: '123'
  };
  expect(processPayment(missingAccountIdPayment)).toBe(false);
});