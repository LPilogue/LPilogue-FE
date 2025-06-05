import { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import signUp from '../api/auth/signup';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  button {
    margin-left: auto;
    margin-top: 20px;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Label = styled.div`
  font-size: 16px;
`;

const Duplication = styled.div`
  font-size: 16px;
  text-align: right;
  margin-top: 10px;
  text-decoration: ${({ status }) =>
    status === 'idle' ? 'underline' : 'none'};
  color: ${({ status }) =>
    // eslint-disable-next-line no-nested-ternary
    status === 'valid'
      ? '#56b7c4'
      : status === 'invalid'
        ? '#BB3939'
        : '#856751'};
  cursor: ${({ status }) => (status === 'idle' ? 'pointer' : 'default')};
`;

const Invalid = styled.div`
  font-size: 14px;
  text-align: right;
  color: #bb3939;
`;

const Signup = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    nickname: '',
    city: '',
    happy: 1,
    sad: 0,
    stressed: 1,
    lonely: 1,
    artist: '',
  });

  const [idStatus, setIdStatus] = useState('idle'); // 'idle' | 'valid' | 'invalid'
  const [idValid, setIdValid] = useState(true);
  const [pwValid, setPwValid] = useState(true);

  const handleChange = (field) => (e) => {
    const { value } = e.target;
    setUserData((prev) => ({ ...prev, [field]: value }));

    const validateUsername = (username) => {
      const idRegex = /^[A-Za-z0-9]{1,6}$/;
      setIdValid(idRegex.test(username));
    };

    const validatePassword = (password) => {
      const pwRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/;
      setPwValid(pwRegex.test(password));
    };

    if (field === 'username') {
      validateUsername(value);
      setIdStatus('idle'); // 아이디 입력 시 중복 상태 초기화
    } else if (field === 'password') {
      validatePassword(value);
    }
  };

  const handleSubmit = () => {
    if (!idValid || !pwValid) {
      alert('입력값을 확인해주세요.');
      return;
    }
    signUp(userData);
  };

  return (
    <Container>
      <Button type="header" onClick={handleSubmit}>
        완료
      </Button>

      {/* ID 입력 */}
      <Block>
        <LabelWrapper>
          <Label>ID</Label>
          {!idValid && <Invalid>아이디 형식이 올바르지 않습니다.</Invalid>}
        </LabelWrapper>
        <Input
          placeholder="영문 대소문자 / 숫자 6자 이내"
          value={userData.username}
          onChange={handleChange('username')}
        />
        {idStatus === 'idle' && (
          <Duplication status="idle">아이디 중복 확인</Duplication>
        )}
        {idStatus === 'valid' && (
          <Duplication status="valid">사용 가능한 아이디입니다.</Duplication>
        )}
        {idStatus === 'invalid' && (
          <Duplication status="invalid">이미 가입된 아이디입니다.</Duplication>
        )}
      </Block>

      {/* PW 입력 */}
      <Block>
        <LabelWrapper>
          <Label>PW</Label>
          {!pwValid && <Invalid>비밀번호 형식이 올바르지 않습니다.</Invalid>}
        </LabelWrapper>
        <Input
          placeholder="영문 대소문자 / 숫자 / 특수문자 8자 이상"
          type="password"
          value={userData.password}
          onChange={handleChange('password')}
        />
      </Block>
    </Container>
  );
};

export default Signup;
