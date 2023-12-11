import styled from "styled-components";

const ReservationFormTitle = ({ onBackClick, title, subTitle }) => {
    return (
        <ReservationFormTitleContainer>
            <TitleContainer>
                <BackButton onClick={onBackClick}>←</BackButton>
                <Title>{title}</Title>
            </TitleContainer>
            <SubTitle>{subTitle}</SubTitle>
        </ReservationFormTitleContainer>
    );
};

export default ReservationFormTitle;

const ReservationFormTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Title = styled.h1`
  margin-left: 5px;
`;

const SubTitle = styled.h3`
  margin-top: 10px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: white;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;
