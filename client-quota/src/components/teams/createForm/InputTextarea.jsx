import styled from 'styled-components';

const StyledInputTextarea = styled.textarea`
    width: 662px;
    height: 145px;
    border-radius: 20px;
    border: 2px solid var(--D3, #D3D3D3);
    background: #FFF;

    ::placeholder {
        color: var(--D3, #D3D3D3);
    }

`

const InputTextarea = ({ name, placeholder }) => {
    return <input className={styles.InputTextarea} type="textarea" name={name} placeholder={placeholder}/>
}

export default InputTextarea;