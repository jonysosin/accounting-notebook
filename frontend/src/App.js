import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TransactionList from './Components/TransactionList'
import './App.css'

function App() {
    return (
        <React.Fragment>
            <Container maxWidth='md'>
                <Typography
                    className={'page-title'}
                    variant='h5'
                    component='h5'
                >
                    Transaction History
                </Typography>
                <TransactionList />
            </Container>
        </React.Fragment>
    )
}

export default App
