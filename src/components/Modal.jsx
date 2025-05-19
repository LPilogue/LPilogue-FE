import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 15;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  gap: 10px;
  transform: translate(-50%, -50%);
  width: 280px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Modal = ({ children, onClose }) => {
  return (
    <Container onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
    </Container>
  );
};

export default Modal;
