import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './../containers/App'
import Home from './../components/Home';
import MakeYear from './../components/MakelYear';
import MakeType from './../components/MakeType';
import MakeYearTransport from './../components/MakeYearTransport';
import Model from './../components/Model';
import NotFound from './../components/NotFound';

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='/mt/:make/:typeId' component={MakeType}/>
            <Route path='/my/:make/:year' component={MakeYear}/>
            <Route path='/myt/:make/:year/:transport' component={MakeYearTransport}/>
            <Route path='/model/:modelId' component={Model}/>
        </Route>
        <Route path='*' component={NotFound} />
    </div>
);


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
