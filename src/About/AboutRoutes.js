import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import JobsList from './JobsList';
import Team from './Team';

/** Routes for about section. */

function AboutRoutes() {
  return (
    <Switch>
      {/* Don't render anything extra; already showing AboutSection! */}
      <Route exact path="/about"></Route>

      <Route exact path="/about/jobs"><JobsList /></Route>
      <Route exact path="/about/team"><Team /></Route>

      {/* default: redirect back to this page */}
      <Redirect to="/about" />
    </Switch>
  )
}

export default AboutRoutes;