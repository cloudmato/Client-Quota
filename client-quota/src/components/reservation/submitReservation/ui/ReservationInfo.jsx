import styled from "styled-components";

import MadeByQuotimeLogo from "./MadeByQuotimeLogo";

const ReservationInfo = () => {

    return (
        <ReservationInfoContainer>
            <InfoContainer>
                <AdvisorName>예약자 이름입니다</AdvisorName>
                <ReservationName>예약 이름입니다</ReservationName>
                <ReservationDuration>1시간</ReservationDuration>
            </InfoContainer>
            <MadeByQuotimeLogo/>
        </ReservationInfoContainer>

    );
};

export default ReservationInfo;

const ReservationInfoContainer = styled.div`
    width: 30%;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const InfoContainer = styled.div`
`;

const AdvisorName = styled.div`
    font-size: 20px;
`;

const ReservationName = styled.div`
    font-size: 23px;
`;

const ReservationDuration = styled.div`
    font-size: 18px;
`;