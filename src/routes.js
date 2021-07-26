import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import CustomerRegistration from './pages/Client/customerRegistration';
import ProductRegistration from './pages/Product/productRegistration';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch> 
                <Route path='/' exact component={Home}/>
                <Route path='/customerRegistration' component={CustomerRegistration}/>
                <Route path='/productRegistration' component={ProductRegistration}/>
            </Switch>
        </BrowserRouter>
    );
}