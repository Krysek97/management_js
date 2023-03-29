import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Sites from './templates/Sites.js';
import Navbar from './templates/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.js';


function App() {
  return (
    <div class="container-fluid">
      <Navbar></Navbar>
      <BrowserRouter>
      <Sites></Sites>
      </BrowserRouter>
    </div>
  );
}

export default App;
