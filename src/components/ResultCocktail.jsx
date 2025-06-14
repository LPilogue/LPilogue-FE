import styled from 'styled-components';
import requestPaper from '../assets/images/backgroundImg.svg';

const Container = styled.div`
  position: relative;
  width: 350px;
  height: 500px;
  margin: 80px auto;
  font-family: 'Freesentation';
  background-image: url(${requestPaper});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CocktailImg = styled.img`
  height: 200px;
  border-radius: 10px;
  margin: 10px auto;
`;

const Name = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
`;

const Description = styled.div`
  font-size: 16px;
  margin: 10px auto 20px;
  line-height: 1.5;
`;

const ResultCocktail = ({
  cocktailName,
  cocktailImagePath,
  cocktailDescription,
}) => {
  return (
    <Container>
      <Content>
        <Title>오늘의 추천 칵테일이에요</Title>
        <CocktailImg src={cocktailImagePath} alt={cocktailName} />
        <Name>{cocktailName}</Name>
        <Description>{cocktailDescription}</Description>
      </Content>
    </Container>
  );
};

export default ResultCocktail;
