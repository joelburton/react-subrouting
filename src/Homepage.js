import React from 'react';
import { Link } from 'react-router-dom';

/** Homepage for site. */

function Homepage() {
  return (
    <section>
      <h1>Welcome to Spicely!</h1>
      <p>We are a purveyor of top-quality spices. And React Routing.</p>
      <p>Want to learn <Link to="/about">more about us?</Link></p>
    </section>
  )
}

export default Homepage;