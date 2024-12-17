import styled from 'styled-components';
import { useState, useEffect } from 'react';
import requestPaper from '../assets/images/backgroundImg.svg';

const Container = styled.div`
  position: relative;
  width: 350px;
  height: 500px;
  margin: auto;
  font-family: 'Freesentation';
  background-image: url(${requestPaper});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  text-align: center;
  white-space: nowrap;
`;

const Title = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  line-height: 30px;
`;

const Line = styled.div`
  border: 0.5px solid #000;
  width: 300px;
  margin: 30px 0;
`;

const Info = styled.div`
  text-align: left;
`;

const Song = styled.div`
  font-size: 20px;
  line-height: 30px;
`;

const StyledDate = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 80px;
`;

const ResultRequest = () => {
  const [songData, setSongData] = useState({
    name: '곡명 없음',
    artist: '아티스트 없음',
  });

  useEffect(() => {
    // 로컬스토리지에서 데이터 가져오기
    const storedSong = localStorage.getItem('representativeSong');
    if (storedSong) {
      setSongData(JSON.parse(storedSong));
    }
  }, []);

  return (
    <Container>
      <Content>
        <Title>REQUEST</Title>
        <Description>
          신청곡을 적어 직접 전달해주세요.
          <br />
          DJ가 신청곡을 틀어드립니다.
        </Description>
        <Line />
        <Info>
          <Song>
            title: {songData.name}
            <br />
            artist: {songData.artist}
          </Song>
          <StyledDate>Date: {new Date().toLocaleDateString()}</StyledDate>
        </Info>
      </Content>
    </Container>
  );
};

export default ResultRequest;
