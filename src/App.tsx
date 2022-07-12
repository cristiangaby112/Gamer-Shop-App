import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rutas from './routes/routes';


function App() {
  return (
    <BrowserRouter>
      <Rutas />
    </BrowserRouter>
  );
}

export default App;
