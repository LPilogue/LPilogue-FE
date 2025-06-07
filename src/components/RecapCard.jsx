import styled from 'styled-components';
import sad from '../assets/images/sad.svg';
import joy from '../assets/images/joy.svg';
import complaint from '../assets/images/complaint.svg';
import angry from '../assets/images/angry.svg';
import confusion from '../assets/images/confusion.svg';

const emotionMap = {
  SAD: { label: '울음', icon: sad },
  HAPPY: { label: '기쁨', icon: joy },
  ANGRY: { label: '화남', icon: angry },
  COMPLAINT: { label: '불만', icon: complaint },
  CONFUSED: { label: '혼란', icon: confusion },
};

const StyledCard = styled.div`
  background: #fbf7ec;
  border-radius: 20px;
  padding: 0px 25px;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardTitle = styled.div`
  font-size: 20px;
  margin: 0;
`;

const CardSubtitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

const CardIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const RecapCard = ({ emotionData }) => {
  if (!emotionData) return null;

  const { emotionType, count } = emotionData;
  const emotion = emotionMap[emotionType] || { label: '기록 없음', icon: null };

  return (
    <StyledCard>
      <CardContent>
        <CardTitle>가장 많이 느낀 감정</CardTitle>
        <CardSubtitle>
          {emotion.label} {count}회
        </CardSubtitle>
      </CardContent>
      <CardIcon>
        {emotion.icon ? (
          <img src={emotion.icon} alt={emotion.label} />
        ) : (
          <span>😶</span>
        )}
      </CardIcon>
    </StyledCard>
  );
};

export default RecapCard;
