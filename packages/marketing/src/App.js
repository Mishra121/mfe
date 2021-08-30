import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'
import AuthApp from './components/AuthApp';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
})

export default ({ history }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                    {/* <Route path="/auth" component={AuthApp} /> */}
                </Switch>
                <h1>Want To Get Another child component inside</h1>
                <AuthApp />
            </Router>
        </StylesProvider>
    </div>
};