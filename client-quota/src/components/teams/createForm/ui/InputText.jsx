import styled from 'styled-components';

const StyledInputText = styled.input`
    width: 410px;
    height: 50px;
    border-radius: 20px;
    border: 2px solid var(--D3, #D3D3D3);
    background: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-right: 20px;
    padding-left: 20px;

    ::placeholder {
        color: var(--D3, #D3D3D3);
      }
`

const InputText = ({ name, placeholder }) => {
    return <StyledInputText type="text" name={name} placeholder={placeholder}/>
}

export default InputText;