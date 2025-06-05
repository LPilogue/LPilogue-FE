import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import login from '../api/auth/login';

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
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleLogin = async () => {
    try {
      const res = await login(form);
      if (res?.isSuccess) {
        navigate('/home');
      } else {
        alert(res?.message || '로그인 실패');
      }
    } catch (err) {
      console.error('로그인 오류:', err);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <Container>
      <Block>
        <Label>ID</Label>
        <Input
          placeholder="아이디를 입력하세요."
          value={form.username}
          onChange={handleChange('username')}
        />
      </Block>
      <Block>
        <Label>PW</Label>
        <Input
          placeholder="비밀번호를 입력하세요."
          type="password"
          value={form.password}
          onChange={handleChange('password')}
        />
      </Block>
      <Button type="full" onClick={handleLogin}>
        로그인
      </Button>
    </Container>
  );
};

export default Login;
