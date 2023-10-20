import styled from 'styled-components';

// 태그 안에 required 작성하시면 * 표시가 생깁니다
// 예시 : <InputTitle required>그룹 이름</InputTitle>

const InputTitle = ({ children, required })=> {
    return (
        <StyledInputTitle>
            {children}
            {required && <RequiredStar>*</RequiredStar>}
        </StyledInputTitle>
    );
}

export default InputTitle;

const StyledInputTitle = styled.h2`
    display: flex;
    align-items: center;
`

const RequiredStar = styled.span`
    color : #6349F6;
    margin-left: 10px;
`
