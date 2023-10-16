import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* import Delivery from './pages/delivery'; */
import Roshs from './pages/Roshs'
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
       {/*  <Route path="/delivery" component={Delivery} /> */}
        <Route path="/delivery/roshs" component={Roshs} /> 
      </Switch>
    </BrowserRouter>
  );
}
