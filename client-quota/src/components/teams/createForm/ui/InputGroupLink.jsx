import styled from 'styled-components';



const FixedGroupLink = styled.div`
    width: 180px;
    height: 50px;
    border-radius: 20px;
    border: 2px solid var(--D3, #D3D3D3);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--D3, #D3D3D3);
    font-size: 18px;
    font-style: normal;
    font-weight: 550;
    line-height: normal;

`

const FlexGroupLink = styled.input`
    flex: 1;
    border: none;
    background: none;
    padding-left: 15px;
    padding-right: 15px;
    outline: none;
    border-radius: 20px;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    ::placeholder {
        color: var(--D3, #D3D3D3);
    }

`;

const StyledInputGroupLink = styled.div`
    width: 450px;
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    border: 2px solid var(--D3, #D3D3D3);
    border-left: none;
    background: #FFF;

    &:focus-within {
        border: 2px solid #6349F6;
        border-left: none;
    }
`;
const InputGroupLink = ({ name, placeholder }) => {
    return <StyledInputGroupLink>
        <FixedGroupLink>quotime.co.kr</FixedGroupLink>
        <FlexGroupLink name={name} placeholder={placeholder}/>
    </StyledInputGroupLink>
}

export default InputGroupLink;