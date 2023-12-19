import styled from "styled-components"
import ImgText from "./ImgText";
import CopyImage from "../copy/CopyClipBoard";

const ReservationModal = () => {

    const cardModal = () => {
        console.log("복사 완료")
    }
    
    return(
        <ReservationModalContiner>
            <h2>semi-meeting</h2>
            <ReserveImg src={"assets/svg/time.svg"} text={"1 시간"} style={{marginLeft:'20px'}}></ReserveImg>
            <ReserveImg src={"assets/svg/meet.svg"} text={"오프라인"} style={{marginLeft:'23px'}}></ReserveImg>
            <ReserveImg id="meet" src={"assets/svg/memberProfile.svg"} text={"kyunellroll"} style={{marginLeft:'18px'}}></ReserveImg>
            <ReserveImg src={"assets/svg/date.svg"} text={"월, 화, 수"} style={{marginLeft:'20px'}}></ReserveImg>
            <CopyLinkContainer id="copyLink">
                <p id='teamInfo'>https://client-quota.vercel.app/booking</p>
            </CopyLinkContainer>
        </ReservationModalContiner>
    )
}

const ReservationModalContiner = styled.div`
    width: 266px;
    height: 266px;
    background-color: white;
    margin: 40px;
    border-left: 1px solid #DFDFDF;
    border-right: 1px solid #DFDFDF;
    border-top: 10px solid var(--primary-color);
    border-bottom: 1px solid #DFDFDF;

    h2{
        margin: 20px;
    }
`

const ReserveImg = styled(ImgText)`
`;

const CopyLinkContainer = styled.div`
    display: flex;
    transform: scale(0.6)  translateX(-60px) translateY(-20px);
    #teamInfo {
        color: var(--primary-color);
        margin-right: 10px;
    }
`

export default ReservationModal;