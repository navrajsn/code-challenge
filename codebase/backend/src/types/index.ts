export interface EnergyAccount {
  id: string;
  type: string;
  address: string;
}

export type DueCharges = {
    id: string;
    accountId: string; 
    date: string;
    amount: number
}

export interface PaymentRequest {
  accountId: string;
  amount: number;
  creditCardNumber: string;
  expiryDate: string;
  cvv: string;
}