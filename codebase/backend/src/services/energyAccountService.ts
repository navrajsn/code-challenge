import { accounts } from '../mocks/energyAccountsAPIMock';
import { dueCharges } from '../mocks/dueChargesAPI';
import { EnergyAccount } from '../types';

export const fetchEnergyAccountsWithBalances = (): EnergyAccount[] => {
  return accounts.map((account) => {
    const accountCharges = dueCharges.filter((charge) => charge.accountId === account.id);
    const balance = accountCharges.reduce((sum, charge) => sum + charge.amount, 0);
    return { ...account, balance };
  });
};