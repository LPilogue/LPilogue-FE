import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';

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

const Label = styled.div`
  font-size: 16px;
`;

const Duplication = styled.div`
  font-size: 16px;
  color: #856751;
  text-decoration: underline;
  text-align: right;
  margin-top: 10px;
`;

const Signup = () => {
  return (
    <Container>
      <Button size="header">완료</Button>
      <Block>
        <Label>ID</Label>
        <Input placeholder="영문 대소문자 / 숫자 6자 이내" />
        <Duplication>아이디 중복 확인</Duplication>
      </Block>
      <Block>
        <Label>PW</Label>
        <Input placeholder="영문 대소문자 / 숫자 / 특수문자 8자 이내" />
      </Block>
    </Container>
  );
};

export default Signup;
