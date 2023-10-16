import styled from 'styled-components';

const StyledInputText = styled.input`
    width: 619px;
    height: 107px;
    border-radius: 20px;
    border: 2px solid var(--D3, #D3D3D3);
    background: #FFF;

    ::placeholder {
        color: var(--D3, #D3D3D3);
      }
`

const InputText = ({ name, placeholder }) => {
    return <StyledInputText type="text" name={name} placeholder={placeholder}/>
}

export default InputText;