import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Fondo */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokemon/:id" element={<Detail />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

