import styled from 'styled-components';
import sad from '../assets/images/sad.svg';
// import joy from '../assets/images/joy.svg'
// import complaint from '../assets/images/complaint.svg'
// import angry from '../assets/images/angry.svg'
// import confusion from '../assets/images/confusion.svg'

const StyledCard = styled.div`
  background: #fbf7ec;
  border-radius: 20px;
  padding: 0px 25px;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
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
const RecapCard = () => {
  return (
    <StyledCard>
      <CardContent>
        <CardTitle>가장 많이 느낀 감정</CardTitle>
        <CardSubtitle>울음 5회</CardSubtitle>
      </CardContent>
      <CardIcon>
        <img src={sad} alt="sad" />
      </CardIcon>
    </StyledCard>
  );
};

export default RecapCard;
