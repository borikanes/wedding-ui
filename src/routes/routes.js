import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Faq from '../Faq'
import 

export default () => {
    (<BrowserRouter>
        <Switch>
            <Route path="/faq" exact component={Faq} />
        </Switch>
    </BrowserRouter>);
}