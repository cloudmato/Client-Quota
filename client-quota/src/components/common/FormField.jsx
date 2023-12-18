import styled from 'styled-components';

import InputSubTitle from '../reservation/createReservation/ui/InputSubTitle';
import InputText from '@/components/common/InputText';

// input text의 제목, 입력란 밑의 설명이 포함된 컴포넌트.
const FormField = ({value, onChange, title, name, placeholder, description, error}) => {
    return (
        <FieldContainer>
            <InputSubTitle required>{title}</InputSubTitle>
            <InputText 
                name={name} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
            />
            {error ? <ErrorDescription>{error}</ErrorDescription> : 
            (description && <InputDescription>{description}</InputDescription>)}
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

const ErrorDescription = styled.div`
    margin-top: 8px;
    font-size: 16px;
    color: red;
`;
