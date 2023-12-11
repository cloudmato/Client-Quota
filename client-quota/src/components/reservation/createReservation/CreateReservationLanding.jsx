import styled from "styled-components";
import CreateReservationForm from "./ui/CreateReservationForm";
import ReservationFormTitle from "./ui/ReservationFormTitle";

const CreateReservationLanding = () => {
    return (
        <CreateReservationFormContainer>
            <ReservationFormContainer>
                <ReservationFormTitle
                    onBackClick={() => window.history.back()}
                    title="예약 만들기 그룹"
                    subTitle="두 번째 팀" //팀 정보 필요
                />
                <CreateReservationForm/>
            </ReservationFormContainer>
        </CreateReservationFormContainer>
    );    
};

export default CreateReservationLanding;

const CreateReservationFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReservationFormContainer = styled.div`
  width: 80%;
  padding: 20px;
`;

const Title = styled.h1`
  margin-left: 5px;
`;

const BackButton = styled.button`
  width: 39px;
  height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  background: white;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: pointer;
`;
