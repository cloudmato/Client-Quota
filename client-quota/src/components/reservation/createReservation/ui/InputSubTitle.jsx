import styled from 'styled-components';

const InputSubTitle = ({ children, required, desc })=> {
    return (
        <StyledInputTitleWrapper>
            <StyledInputTitle>
                {children}
                {required && <RequiredStar>*</RequiredStar>}
            </StyledInputTitle>
            {desc && <DescriptionText>{desc}</DescriptionText>}
        </StyledInputTitleWrapper>
    );
}

export default InputSubTitle;

const StyledInputTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const StyledInputTitle = styled.h4`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const RequiredStar = styled.span`
  color: var(--primary-color);
  margin-left: 10px;
`;

const DescriptionText = styled.div`
  color: #474747;
  font-size: 15px;
  margin-top: 0px;
`;

