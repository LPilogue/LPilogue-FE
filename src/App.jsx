import { Route, Routes, useLocation } from 'react-router-dom';
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
import Todayprofile from './pages/Todayprofile';
import Monthly from './pages/Monthly';
import Recap from './pages/Recap';
import SignupOnboarding from './pages/SignupOnboarding';
import EditProfile from './pages/EditProfile';

function App() {
  const token = localStorage.getItem('accessToken');
  const location = useLocation();

  // 토큰 없이 접근 가능한 경로 목록
  const publicPaths = [
    '/',
    '/login',
    '/signup',
    '/signup/profile',
    '/signup/onboarding',
  ];

  const isPublic = publicPaths.includes(location.pathname);

  // 토큰 없고, 비공개 경로 접근 시 리다이렉션
  if (!token && !isPublic) {
    window.location.href = '/login';
    return null;
  }

  // 토큰 있는 경우에 회원가입/로그인에 접근 시 홈으로 리다이렉션
  if (token && isPublic) {
    window.location.href = '/home';
    return null;
  }

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/profile" element={<Profile />} />
      <Route path="/signup/onboarding" element={<SignupOnboarding />} />
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
      <Route path="/mypage/profile" element={<EditProfile />} />
      <Route path="/mypage/recap" element={<Recap />} />
      <Route path="/mypage/monthly" element={<Monthly />} />
      <Route path="/diary/:diaryId" element={<Details />} />
      <Route path="/voice" element={<Voice />} />
    </Routes>
  );
}

export default App;
