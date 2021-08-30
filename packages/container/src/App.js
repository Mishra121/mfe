import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header'

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
})

export default () => (
    <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
        </Switch>
        Hi There ! Learning Micro Forntends
    </div>
    </BrowserRouter>
    </StylesProvider>
);