import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Write from './pages/Write';
import Loading from './components/Loading';
import Mypage from './pages/Mypage';
import Details from './pages/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/write" element={<Write />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/detail" element={<Details />} />
    </Routes>
  );
}

export default App;
