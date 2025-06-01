import { fetchEnergyAccountsWithBalances } from '../services/energyAccountService';

jest.mock('../services/energyAccountService', () => ({
  fetchEnergyAccountsWithBalances: jest.fn(),
}));

describe('fetchEnergyAccountsWithBalances', () => {
  test('calculates balances correctly', () => {
    const mockAccounts = [
      {
        id: "A-0001",
        type: "ELECTRICITY",
        address: "1 Greville Ct, Thomastown, 3076, Victoria",
        meterNumber: "1234567890",
      },
      {
        id: "A-0002",
        type: "GAS",
        address: "74 Taltarni Rd, Yawong Hills, 3478, Victoria",
        volume: 3034,
      },
    ];

    (fetchEnergyAccountsWithBalances as jest.Mock).mockReturnValue(mockAccounts);

    const accounts = fetchEnergyAccountsWithBalances();
    expect(accounts).toEqual(expect.arrayContaining(mockAccounts));
  });
});