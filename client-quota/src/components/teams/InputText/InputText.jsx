import styles from './InputText.module.css';

const InputText = ({ name, placeholder}) => {
    return <input className={styles.InputText} type="text" name={name} placeholder={placeholder}/>
}

export default InputText;