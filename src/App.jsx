import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Write from './pages/Write';
import Loading from './components/Loading';
import Recommend from './pages/Recommend';
import Representative from './pages/Representative';
import Result from './pages/Result';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/write" element={<Write />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/recommend" element={<Recommend />} />
      <Route path="/recommend/confirm" element={<Representative />} />
      <Route path="/recommend/result" element={<Result />} />
    </Routes>
  );
}

export default App;
