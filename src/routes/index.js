import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import * as C from './constants'

import App from './containers/App'

import Home from './components/Home';
import MakeYear from './components/MakelYear';
import MakeYearTransport from './components/MakeYearTransport';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const ROUTE = {
    makeYear: {}
}

<Route path='/' component={Home}>
    <IndexRoute component={App} />
    <Route path='my' component={MakeYear} />
    <Route path='myt' component={MakeYearTransport} />
</Route>


export const routes = {
    path: `${C.RELATED}/`,
    component: Layout,
    indexRoute: {
        component: () => {
            return (
                <div></div>
            )
        }
    },
    childRoutes: [
        {
            path: ROUTE.makeYear,
            component: null
        },
        {
            path: ROUTE.PAYMENTS,
            component: Payments
        },
        {
            path: ROUTE.DEAL_PASSPORTS_CONTRACT,
            component: DealPassportsContractPage,
            headerText: PAGE_HEADERS.DEAL_PASSPORTS_CONTRACT_HEADER
        },
        {
            path: `${ROUTE.DEAL_PASSPORTS_CONTRACT}/:id`,
            component: DealPassportContract
        },
        {
            path: ROUTE.NEW_DEAL_PASSPORT_CONTRACT,
            component: DealPassportContract
        },
        {
            path: BANK_EMPLOYEE_ROUTE.DEAL_PASSPORTS_CONTRACT,
            component: BankEmployeeDealPassportsContractPage,
            headerText: PAGE_HEADERS.BANK_EMPLOYEE_DEAL_PASSPORTS_CONTRACT_HEADER
        }
    ]
}
