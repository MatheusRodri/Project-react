import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import NotFound from './pages/NotFound';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/pagina1" component={Page1} />
                <Route path="/pagina2" component={Page2} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}