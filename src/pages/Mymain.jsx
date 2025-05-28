import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  padding: 40px 30px 30px 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 60px;
`;

const MenuButton = styled.button`
  background: white;
  border: none;
  border-radius: 15px;
  padding: 35px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  height: fit-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const BottomSection = styled.div`
  padding-top: 20px;
  flex-shrink: 0;
`;

const SubText = styled.p`
  font-size: 16px;
  margin-top: 4px;
  maring-left: 35px;
`;

const Mymain = () => {
  const navigate = useNavigate();

  const handleDiaryClick = () => {
    navigate('/mypage'); // 기존 Mypage 컴포넌트로 이동
  };

  const handleProfileClick = () => {
    navigate('/signup/profile'); // 기존 Mypage 컴포넌트로 이동
  };

  return (
    <Container>
      <Title>닉네임님</Title>

      <ButtonGrid>
        <MenuButton onClick={handleDiaryClick}>일기 보기</MenuButton>
        <MenuButton onClick={handleProfileClick}>프로필 수정</MenuButton>
      </ButtonGrid>

      <BottomSection>
        <SubText>로그아웃</SubText>
        <SubText>회원탈퇴</SubText>
      </BottomSection>
    </Container>
  );
};

export default Mymain;
