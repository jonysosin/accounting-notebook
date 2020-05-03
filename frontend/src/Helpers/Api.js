const BASE_URL = process.env.REACT_APP_API

export default class API {
    static async getTransactions() {
        return fetch(BASE_URL + '/transactions').then((response) =>
            response.json()
        )
    }
}
