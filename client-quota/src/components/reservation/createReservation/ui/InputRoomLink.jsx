import React, { useState } from 'react';
import styled from 'styled-components';

import InputLink from '@/components/common/InputLink';

const InputRoomLink = ({ name, placeholder, children, onRoomUrlChange}) => {
    const [warning, setWarning] = useState(null);
    const [available, setAvailable] = useState(null);
    const [roomLinkValue, setRoomLinkValue] = useState("");

    const validateLinkValue = (value) => {
        if (!value.trim()) {
            setWarning("! 사용하실 예약 링크 주소를 입력해 주세요");
            setAvailable("");
        } else if (!/^[A-Za-z0-9]+$/.test(value)) {
            setWarning("! 링크 주소에는 영어와 숫자만 사용할 수 있습니다");
            setAvailable("");
        } else {
            setWarning("");
            checkRoomUrlValidate(value); //중복 검사
        }
    };

    const checkRoomUrlValidate = async (value) => {
        try {
            // const response = await checkRoomUrl(value); //api 요청
            const response = true;
        
            if (response === true) {
                onRoomUrlChange(value, true);
                setAvailable("사용 가능한 주소입니다.");
            } else {
                onRoomUrlChange(false);
                setWarning("해당 링크는 이미 사용 중입니다.");
            }

        } catch (error) {
            console.log('ERROR', error);
        }
    }

    const handleInputChange = (event) => {
        setRoomLinkValue(event.target.value);
        setWarning("");
    };

    const handleCheckButton = (event) => {
        event.preventDefault();
        validateLinkValue(roomLinkValue);
    };

    return (
        <StyledInputRoomLink>
            <InputRoom>
                {/* fixedLink 공간 부족으로 줄바뀜 이슈 있음. InputLink가 공통 컴포넌트라 추후 수정 예정  */}
                <InputLink name={name} placeholder={placeholder} value={roomLinkValue} onChange={handleInputChange}>{children}</InputLink>
                <RoomLinkCheckButton onClick={handleCheckButton}>중복확인</RoomLinkCheckButton>
            </InputRoom>
            {warning && <WarningText>{warning}</WarningText>}
            {available && <AvailableMessage>{available}</AvailableMessage>}
        </StyledInputRoomLink>
    );
}

export default InputRoomLink;


const StyledInputRoomLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`
const InputRoom = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const RoomLinkCheckButton = styled.button`
    width: 90px;
    height: 45px;
    border-radius: 20px;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: none;
    cursor: pointer;
    background-color: var(--primary-color);
    color: white;
`

const WarningText = styled.div`
    color: var(--error-color);
    margin-left: 10px;
    margin-top: 10px;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const AvailableMessage = styled.div`
    color: #5FCF9B;
    margin-left: 10px;
    margin-top: 10px;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`