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
  const idStatus = 'invalid';
  const idValid = false;
  const pwValid = false;

  // 임시 회원정보
  const userData = {
    username: 'test',
    password: 'password!123',
    nickname: '박예진',
    city: 'Seoul',
    happy: 1, // 1: 신나는 업템포 음악
    sad: 0, // 0: 기분을 바꿔줄 밝은 음악
    stressed: 1, // 1: 강렬한 비트 음악
    lonely: 1, // 1: 감성적인 가사 음악
    artist: '아이유', // 좋아하는 아티스트
  };

  return (
    <Container>
      <Button
        type="header"
        onClick={() => {
          signUp(userData);
        }}
      >
        완료
      </Button>
      <Block>
        <LabelWrapper>
          <Label>ID</Label>
          {!idValid && <Invalid>아이디 형식이 올바르지 않습니다.</Invalid>}
        </LabelWrapper>
        <Input placeholder="영문 대소문자 / 숫자 6자 이내" />
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
      <Block>
        <LabelWrapper>
          <Label>PW</Label>
          {!pwValid && <Invalid>비밀번호 형식이 올바르지 않습니다.</Invalid>}
        </LabelWrapper>
        <Input
          placeholder="영문 대소문자 / 숫자 / 특수문자 8자 이내"
          type="password"
        />
      </Block>
    </Container>
  );
};

export default Signup;
