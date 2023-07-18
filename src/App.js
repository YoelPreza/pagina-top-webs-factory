import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tienda from './components/Tienda';
import Landing from './components/Landing';
import Nosotros from './components/Nosotros';
import Navbar from './components/Navbar';
import Servicios from './components/Servicios';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/tienda' element={<Tienda />}  />
      <Route path='/nosotros' element={<Nosotros />} />
      <Route path='/servicios' element={<Servicios />} />
      <Route path='/testimonios' element={<Testimonios />} />
      <Route path='/contacto' element={<Contacto />} />
      
    </Routes>
    </BrowserRouter>

  );
}

export default App;
