import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Write from './pages/Write';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/write" element={<Write />} />
    </Routes>
  );
}

export default App;
