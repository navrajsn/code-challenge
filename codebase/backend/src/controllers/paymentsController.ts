import { Request, Response } from 'express';
import { processPayment } from '../services/paymentProcessorService';
import { PaymentRequest } from '../types';

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Process a payment
 *     description: Processes a payment request and returns the result.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               accountId:
 *                 type: string
 *                 description: The ID of the account making the payment.
 *                 example: "12345"
 *               amount:
 *                 type: number
 *                 description: The amount to be paid.
 *                 example: 100
 *               creditCardNumber:
 *                 type: string
 *                 description: The credit card number used for the payment.
 *                 example: "4111111111111111"
 *               expiryDate:
 *                 type: string
 *                 description: The expiry date of the credit card in MM/YY format.
 *                 example: "12/25"
 *               cvv:
 *                 type: string
 *                 description: The CVV of the credit card.
 *                 example: "123"
 *     responses:
 *       200:
 *         description: Payment was successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Payment successful"
 *       400:
 *         description: Payment failed.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Payment failed"
 */

export const makePayment = (req: Request, res: Response) => {
  const payment: PaymentRequest = req.body;
  const success = processPayment(payment);

  if (success) {
    res.status(200).json({ message: 'Payment successful' });
  } else {
    res.status(400).json({ message: 'Payment failed' });
  }
};