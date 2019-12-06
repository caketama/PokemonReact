import React from 'react';
import { Route } from 'react-router-dom';
import Blank from './Blank'
import Pokemon from './Pokemon'

function Router() {
  return (
  <div>
    <Route path="/pokemon" component={Pokemon} />
  </div>
  )
}
export default Router;
