import { Request, Response } from 'express';
import { fetchEnergyAccountsWithBalances } from '../services/energyAccountService';

/**
 * @swagger
 * /accounts:
 *   get:
 *     summary: Retrieve a list of energy accounts with balances
 *     description: Fetches all energy accounts along with their current balances.
 *     responses:
 *       200:
 *         description: A list of energy accounts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The unique ID of the account
 *                   type:
 *                     type: string
 *                     description: The type of energy account (e.g., Solar, Wind)
 *                   address:
 *                     type: string
 *                     description: The address associated with the account
 *                   dueAmount:
 *                     type: number
 *                     description: The balance due for the account
 */
export const getEnergyAccounts = (req: Request, res: Response) => {
  const accounts = fetchEnergyAccountsWithBalances();
  res.json(accounts);
};