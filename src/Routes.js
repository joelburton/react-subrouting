import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './Homepage';
import AboutSection from './About/AboutSection';

/** Top level routes. */

function Routes() {
  return (
    <Switch>
      <Route exact path="/"><Homepage /></Route>
      <Route path="/about"><AboutSection /></Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;