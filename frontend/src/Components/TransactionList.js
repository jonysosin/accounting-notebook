import React from 'react'
import API from '../Helpers/Api'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default class TransactionList extends React.Component {
    state = { transactions: [] }

    componentDidMount() {
        API.getTransactions().then((transactions) => {
            this.setState({ transactions })
        })
    }

    render() {
        return (
            <div>
                {this.state.transactions.map((transaction) => (
                    <ExpansionPanel
                        className={'transaction-' + transaction.type}
                    >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography
                                style={{
                                    textTransform: 'uppercase',
                                    color:
                                        transaction.type === 'credit'
                                            ? 'green'
                                            : 'red',
                                }}
                            >
                                {transaction.type + ' - $' + transaction.amount}
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                <p>
                                    <b>ID: </b>
                                    {transaction.id}
                                </p>
                                <p>
                                    <b>Effective Date: </b>
                                    {transaction.effectiveDate}
                                </p>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))}
            </div>
        )
    }
}
