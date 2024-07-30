import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import ContactoPage from './pages/ContactoPage'
import NosotrosPage from './pages/NosotrosPage'
import HomePage from './pages/HomePage'
import GaleriaPage from './pages/GaleriaPage'

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
