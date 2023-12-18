import styled from "styled-components"

const TeamMakeModal = () => {
    // 이후에 초대가 생기면 case에 따른 분기처리로 확장 필요
    const onNavGroupClick = () => {
        window.location.href = '/teams';
    }

    const onReservationClick = () => {
        window.location.href = '/reservation'
    }

    return (
        <TeamMakeModalContainer>
            <button onMouseDown={onNavGroupClick}>그룹 만들기</button>
            <button onMouseDown={onReservationClick}>일정 등록하기</button>
        </TeamMakeModalContainer>
    )
}

export default TeamMakeModal;

const TeamMakeModalContainer = styled.article`
    background-color: white;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    width: 110px;
    height: 81px;

    button {
        transition: 0.3s ease-out;
        border: none;
        background: none;
        cursor: pointer;
        padding: 0 1rem;
        width: 100%;
        height: 2.4rem;
        &:not(:last-child) {
            border-bottom: 1px solid #DFDFDF;
        }
    }
`
