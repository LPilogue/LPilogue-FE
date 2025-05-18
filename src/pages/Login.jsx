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
  return (
    <Container>
      <Block>
        <Label>ID</Label>
        <Input placeholder="영문 대소문자 / 숫자 6자 이내" />
      </Block>
      <Block>
        <Label>PW</Label>
        <Input
          placeholder="영문 대소문자 / 숫자 / 특수문자 8자 이내"
          type="password"
        />
      </Block>
      <Button size="full">로그인</Button>
    </Container>
  );
};

export default Login;
