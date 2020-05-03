import * as Router from 'koa-router'
import TransactionController from '../controllers/transactions'

const router = new Router()
router.prefix('/api')

router.get('/transactions', TransactionController.getAll)

router.post('/transactions', TransactionController.addTransaction)

router.get('/transactions/balance', TransactionController.getBalance)

router.get(
  '/transactions/:transactionId',
  TransactionController.getTransactionById
)

export default router
