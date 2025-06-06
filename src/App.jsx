import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Write from './pages/Write';
import Loading from './components/Loading';
import Recommend from './pages/Recommend';
import Representative from './pages/Representative';
import Result from './pages/Result';
import Chat from './pages/Chat';
import Mypage from './pages/Mypage';
import Details from './pages/Details';
import Voice from './pages/Voice';
import Onboarding from './pages/Onboarding';
import Todayprofile from './pages/Todayprofile';
import Monthly from './pages/Monthly';
import Recap from './pages/Recap';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/profile" element={<Profile />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/onboarding/today" element={<Todayprofile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/write" element={<Write />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/recommend" element={<Recommend />} />
      <Route path="/recommend/confirm" element={<Representative />} />
      <Route path="/recommend/result" element={<Result />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/mypage/recap" element={<Recap />} />
      <Route path="/mypage/monthly" element={<Monthly />} />
      <Route path="/diary/:diaryId" element={<Details />} />
      <Route path="/voice" element={<Voice />} />
    </Routes>
  );
}

export default App;
