import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 100px;

  button {
    margin: auto;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.div`
  font-size: 16px;
`;

const Login = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Block>
        <Label>ID</Label>
        <Input placeholder="아이디를 입력하세요." />
      </Block>
      <Block>
        <Label>PW</Label>
        <Input placeholder="비밀번호를 입력하세요." type="password" />
      </Block>
      <Button
        type="full"
        onClick={() => {
          navigate('/home');
        }}
      >
        로그인
      </Button>
    </Container>
  );
};

export default Login;
