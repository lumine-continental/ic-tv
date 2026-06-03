
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './views/Home';
import { QuienesSomos } from './views/QuienesSomos';
import { Becas } from './views/Becas';
import { Carreras } from './views/Carreras';
import { Internacionalizacion } from './views/Internacionalizacion';
import { RutaContinental } from './views/RutaContinental';

import { Empleabilidad } from './views/Empleabilidad';
import { QrCode } from './views/QrCode';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="becas/*" element={<Becas />} />
          <Route path="carreras/*" element={<Carreras />} />
          <Route path="internacionalizacion" element={<Internacionalizacion />} />
          <Route path="ruta-continental" element={<RutaContinental />} />
          <Route path="empleabilidad" element={<Empleabilidad />} />
          <Route path="qr" element={<QrCode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
