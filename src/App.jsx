import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Write from './pages/Write';
import Loading from './components/Loading';
import Chat from './pages/Chat';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/write" element={<Write />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
