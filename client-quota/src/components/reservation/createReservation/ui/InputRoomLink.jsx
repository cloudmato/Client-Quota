import React, { useState } from 'react';
import styled from 'styled-components';

import InputLink from '@/components/common/InputLink';

const InputRoomLink = ({ name, placeholder, children }) => {
    const [warning, setWarning] = useState(null);
    const [roomLinkValue, setRoomLinkValue] = useState("");

    const validateLinkValue = (value) => {
        if (!value.trim()) {
            setWarning("! 사용하실 예약 링크 주소를 입력해 주세요");
        } else if (!/^[A-Za-z0-9]+$/.test(value)) {
            setWarning("! 링크 주소에는 영어와 숫자만 사용할 수 있습니다");
        } else {
            setWarning("");
        }
    };

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