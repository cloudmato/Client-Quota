import InputLink from '@/components/common/InputLink';
import { useState } from 'react';
import styled from 'styled-components';
// import { checkTeamUrl } from '@/api/teams'; 

const InputGroupLink = ({name, placeholder, children, onTeamUrlChange}) => {
    const [warning, setWarning] = useState(null);
    const [available, setAvailable] = useState(null);
    const [inputGroupLinkValue, setInputGroupLinkValue] = useState("");

    const validateLinkValue =  (value) => {
        //값이 입력되지 않았는지 확인
        if(!value.trim()) {
            setWarning("! 사용하실 그룹 링크 주소를 입력해 주세요")
            setAvailable("");
        }
        // 영어와 숫자로만 되어있는지 확인
        else if (!/^[A-Za-z0-9]+$/.test(value)) {
            setWarning("! 링크 주소에는 영어와 숫자만 사용할 수 있습니다");
            setAvailable("");
        } else {
            setWarning(""); // 유효한 값이면 경고메시지 초기화
            checkTeamUrlValidate(value); //중복 검사
        }
    };

    const checkTeamUrlValidate = async (value) => {
        try {
            // const response = await checkTeamUrl(value); //api 요청
            const response = true;
        
            if (response === true) {
                onTeamUrlChange(value, true);
                setAvailable("사용 가능한 주소입니다.");
            } else {
                onTeamUrlChange(false);
                setWarning("해당 링크는 이미 사용 중입니다.");
            }

        } catch (error) {
            console.log('ERROR', error);
        }
    }

    const handleInputChange = (event) => {
        setInputGroupLinkValue(event.target.value);
        setWarning(""); // 입력 값이 변경될 때 경고문구 초기화
        setAvailable("");
        onTeamUrlChange(false);
    };

    const handleCheckButton = (event) => {
        event.preventDefault();
        validateLinkValue(inputGroupLinkValue);
    };

    return (
    <StyledInputGroupLink>
        <InputGroup>
            <InputLink name={name} placeholder={placeholder} onChange={handleInputChange}>
                {children}    
            </InputLink>
            <GroupLinkCheckButton onClick={handleCheckButton}>중복확인</GroupLinkCheckButton>
        </InputGroup>
        {warning && <WarningMessage>{warning}</WarningMessage>}
        {available && <AvailableMessage>{available}</AvailableMessage>}
    </StyledInputGroupLink>
    );
}

export default InputGroupLink;

const StyledInputGroupLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`
const InputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const GroupLinkCheckButton = styled.button`
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

const WarningMessage = styled.div`
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