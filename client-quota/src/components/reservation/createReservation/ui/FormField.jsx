import styled from 'styled-components';

import InputSubTitle from './InputSubTitle';
import InputText from '@/components/common/InputText';

const FormField = ({value, onChange, title, name, placeholder, description}) => {
    return (
        <FieldContainer>
            <InputSubTitle required>{title}</InputSubTitle>
            <InputText 
                name={name} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
            />
            {description && <InputDescription>{description}</InputDescription>}
        </FieldContainer>
    );
};

export default FormField;

const FieldContainer = styled.div`
    margin-bottom: 20px; 
`;

const InputDescription = styled.div`
    margin-top: 8px;
    font-size: 16px;
    color: #6c757d; 
`;
