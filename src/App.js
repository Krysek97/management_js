import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Sites from './templates/Sites.js';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div class="container-fluid">
      <BrowserRouter>
        <Sites></Sites>
      </BrowserRouter>
    </div>
  );
}

export default App;
