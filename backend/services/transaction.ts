import {
  Transaction as ITransaction,
  TransactionType,
} from '../models/transaction'
import NotFound from '../models/notFound'
import Validator from 'validator'
import RefusedTransaction from '../models/refusedTransaction'

const transactions: ITransaction[] = []
let balance = 0
const transactionIndexes: Map<string, number> = new Map()
let instance: Transaction | null = null

export default class Transaction {
  static getInstance() {
    if (!instance) {
      instance = new Transaction()
    }

    return instance
  }

  addTransaction(transaction: ITransaction) {
    let newBalance = balance
    if (transaction.type === TransactionType.credit) {
      newBalance += transaction.amount
    } else {
      newBalance -= transaction.amount
    }

    if (newBalance < 0) {
      throw new RefusedTransaction('Balance can not be negative.')
    }

    balance = newBalance
    transactions.push(transaction)
    transactionIndexes.set(transaction.id, transactions.length - 1)
  }

  getAll() {
    return transactions
  }

  getTransactionByID(transactionId: string) {
    const index = transactionIndexes.get(transactionId)

    if (index === undefined) {
      throw new NotFound('Transaction not found')
    } else {
      return transactions[index]
    }
  }

  getBalance() {
    return balance
  }
}
