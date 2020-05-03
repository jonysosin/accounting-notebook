import { Transaction as Model } from '../models/transaction'
import Service from '../services/transaction'
import InvalidParam from '../models/invalidParam'
import Validator from 'validator'

const service = Service.getInstance()

export default class Transaction {
  static getAll(ctx: any) {
    const transactions = service.getAll()

    ctx.body = transactions
  }

  static addTransaction(ctx: any) {
    const body = ctx.request.body

    const transaction = new Model(body)
    service.addTransaction(transaction)

    ctx.body = transaction
  }

  static getTransactionById(ctx: any) {
    const { transactionId } = ctx.params

    if (!Validator.isUUID(transactionId)) {
      throw new InvalidParam('Invalid Transaction ID')
    }

    const transaction = service.getTransactionByID(transactionId)

    ctx.body = transaction
  }

  static getBalance(ctx: any) {
    const balance = service.getBalance()

    ctx.body = { balance }
  }
}
