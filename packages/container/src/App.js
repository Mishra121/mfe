import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header'

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
})

export default () => (
    <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
    <div>
        <Header />
        <MarketingApp />
    </div>
    </BrowserRouter>
    </StylesProvider>
);