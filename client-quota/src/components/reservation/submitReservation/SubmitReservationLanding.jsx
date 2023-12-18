import styled from "styled-components";
import SubmitReservationContainer from "./ui/SubmitReservationContainer";
import SelectDate from "./ui/SelectDate";
import ReservationInfo from "./ui/ReservationInfo";
import SelectTime from "./ui/SelectTime";

const SubmitReservationLanding = () => {
    return(
        <ParentContainer>
            <SubmitReservationContainer>
                <ReservationInfo/>
                <VerticalLine/>
                <SelectDate/>
                <VerticalLine/>
                <SelectTime/>
            </SubmitReservationContainer>
        </ParentContainer>
    );
};

export default SubmitReservationLanding;

const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const VerticalLine = styled.div`
  border-left: 1px solid #D3D3D3;
  height: auto;
  margin: 0 20px;
`;
