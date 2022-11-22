import { Route, Routes } from "react-router-dom";
import Home from "../app/pages/home/Home";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Rutas;