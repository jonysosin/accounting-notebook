import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors'
import TransactionRouter from './routers/transaction'

const app = new Koa()

app
  .use(bodyParser())
  .use(cors())
  .use(async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.status = err.status || 500
      ctx.body = err.message
      ctx.app.emit('error', err, ctx)
    }
  })

app.use(TransactionRouter.routes())

const port = process.env.PORT || 4001
app.listen(port)
console.log(`App started in port ${port}`)
