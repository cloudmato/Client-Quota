import styled from 'styled-components';

const StyledInputTitle = styled.h2`
    display: flex;
    align-items: center;
`

const RequiredStar = styled.span`
    color : #6349F6;
    margin-left: 10px;
`

const InputTitle = ({ children, required })=> {
    return (
        <StyledInputTitle>
            {children}
            {required && <RequiredStar>*</RequiredStar>}
        </StyledInputTitle>
    );
}
export default InputTitle;