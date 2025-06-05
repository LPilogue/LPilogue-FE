import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LPilogue from '../assets/images/Logo_brown.svg?react';
import Button from '../components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 10px;
`;

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <LPilogue height="400px" />
      <Button type="full" onClick={() => navigate('/login')}>
        로그인
      </Button>
      <div>
        아직 계정이 없다면?<Link to="/signup">회원가입하기</Link>
      </div>
    </Container>
  );
};

export default Landing;
