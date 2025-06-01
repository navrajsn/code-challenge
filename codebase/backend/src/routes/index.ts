import express from 'express';
import { getEnergyAccounts } from '../controllers/accountsController';
import { makePayment } from '../controllers/paymentsController';

const router = express.Router();

router.get('/accounts', getEnergyAccounts);
router.post('/payments', makePayment);

export default router;