import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Repertuar from './pages/Repertuar';
import Ekibimiz from './pages/Ekibimiz';
import Hakkimizda from './pages/Hakkimizda';
import Iletisim from './pages/Iletisim';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repertuar" element={<Repertuar />} />
        <Route path="/ekibimiz" element={<Ekibimiz />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/iletisim" element={<Iletisim />} />
      </Routes>
    </Layout>
  );
}

export default App;