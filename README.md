# Transactional Application Test

# Table of contents

<!--ts-->

-   [Installation](#installation)
-   [How to run it](#how-to-run-it)
-   [Postman Collection](#postman-collection)
-   [Endpoints](#endpoints)
<!--te-->

## Installation

```sh
$ git clone git@github.com:jonysosin/accounting-notebook.git

$ cd backend/
$ npm install

$ cd frontend/
$ yarn install
```

## How to run it

You should execute each command in diferents terminal to

```sh
$ cd backend/
$ npm start

$ cd frontend/
$ yarn start
```

## Postman Collection

[Click Here](https://www.getpostman.com/collections/6873e7f9909e0139ab70)

# Endpoints

### New Transaction

_This endpoint is in charge of generating a new transaction for the account._

`POST http://localhost:3001/api/transactions`

_Example of request body_

```json
{
    "type": "debit",
    "amount": "100"
}
```

### Get Transaction By Id

_This endpoint will return the information of the transaction._

`GET http://localhost:3001/api/transactions/:transactionId`

_Example of request_

`GET http://localhost:3001/api/transactions/e7cc8b06-eafd-4518-bcad-27afae924bd5`

_Example of response_

```json
{
    "id": "e7cc8b06-eafd-4518-bcad-27afae924bd5",
    "type": "credit",
    "amount": 200,
    "effectiveDate": "2020-05-03T05:17:26.959Z"
}
```

### List Transactions

_This endpoint will return all the transactions for the account._

`GET http://localhost:3001/api/transactions`

_Example of response_

```json
[
    {
        "id": "20a1d066-30ec-417c-ae57-13d6927a230f",
        "type": "credit",
        "amount": 200,
        "effectiveDate": "2020-05-03T06:04:10.894Z"
    },
    {
        "id": "2fc92747-f2a6-4f78-84cc-dd33e156551c",
        "type": "debit",
        "amount": 90,
        "effectiveDate": "2020-05-03T06:04:12.338Z"
    }
]
```

### Get Balance

_This endpoint will return the current balance of the account._

`GET http://localhost:3001/api/transactions/balance`

_Example of response_

```json
{
    "balance": 200
}
```
