import styled from 'styled-components';

const StyledInputGroupLink = styled.div`
    width: 450px;
    height: 55px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    border: 2px solid var(--D3, #D3D3D3);
    background: #FFF;
`;

const FixedGroupLink = styled.div`
    width: 180px;
    height: 55px;
    border-radius: 20px;
    border: 2px solid var(--D3, #D3D3D3);

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--D3, #D3D3D3);
`

const FlexGroupLink = styled.input`
    flex: 1;
    border: none;
    background: none;
    padding: 10px;
    outline: none;
    border-radius: 20px;

    ::placeholder {
        color: var(--D3, #D3D3D3);
    }
`;

const InputGroupLink = ({ name, placeholder }) => {
    return <StyledInputGroupLink>
        <FixedGroupLink>quotime.co.kr</FixedGroupLink>
        <FlexGroupLink name={name} placeholder={placeholder}/>
    </StyledInputGroupLink>
}

export default InputGroupLink;