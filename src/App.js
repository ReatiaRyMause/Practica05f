import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import './App.css';

function Home() {
  return <h1>Bienvenidos a la Página de Inicio</h1>;
}

function About() {
  return <h2>Acerca de Nosotros</h2>;
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
