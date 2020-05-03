import { v4 as uuid } from 'uuid'
import InvalidParam from './invalidParam'
import Validator from 'validator'

export enum TransactionType {
  credit = 'credit',
  debit = 'DEBIT',
}

export class Transaction {
  id: string
  effectiveDate: Date
  type: TransactionType
  amount: number

  constructor({ amount: rawAmount, type }) {
    const amount = parseFloat(rawAmount)

    if (!Number.isFinite(amount)) {
      throw new InvalidParam(`Invalid amount number: ${rawAmount}.`)
    }

    if (amount < 0) {
      throw new InvalidParam(`The number cannot be negative.`)
    }

    if (!TransactionType[type]) {
      throw new InvalidParam('Invalid transaction type.')
    }

    this.id = uuid()
    this.type = type
    this.amount = amount
    this.effectiveDate = new Date()
  }
}
