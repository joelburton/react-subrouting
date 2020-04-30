import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from './Routes';

/** Main app component -- contains navbar and routes.  */

function App() {
  return (
    <BrowserRouter>
    <main>
      <Navbar />
      <Routes />
      <footer>&copy; by Spice.ly</footer>
    </main>
    </BrowserRouter>
    );
}

export default App;
