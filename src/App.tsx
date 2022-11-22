import { BrowserRouter } from 'react-router-dom';
import Rutas from './routes/routes';
import NavBar from "./app/components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Rutas />
    </BrowserRouter>
  );
}

export default App;
