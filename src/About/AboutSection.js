import React from 'react';
import { Link } from 'react-router-dom';
import AboutRoutes from './AboutRoutes';

/** Common parts of the about section */

function AboutSection() {
  return (
    <section>

      <h2>About Us!</h2>
      <p>We're a great company — {" "}
        <Link to="/about/jobs">we're hiring</Link>
        {" "} to join our {" "}
        <Link to="/about/team">awesome team</Link>.
      </p>

      <AboutRoutes />

    </section>
  )
}

export default AboutSection;