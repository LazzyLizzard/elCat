const ROUTE = {
    my: {}
};

export default routes = {
    path: '/',
    component: Layout,
    indexRoute: {
        component: () => {
            return (
                <div>*</div>
            )
        }
    },
    childRoutes: [
        {
            path: ROUTE.my,
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
