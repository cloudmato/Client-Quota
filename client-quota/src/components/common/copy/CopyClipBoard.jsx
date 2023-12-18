import React, { useState } from 'react';
import styled from 'styled-components';

const CopyImage = ({ textToCopy, cardModalEvent}) => {
    const [isCopy, setIsCopy] = useState(false);
  
    const onCopy = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        setIsCopy(true);
        return true;
      } catch (error) {
        console.error(error);
        setIsCopy(false);
        return false;
      }
    };
  
    const handleCopyClick = async () => {
      const success = await onCopy(textToCopy);
  
      if (success) {
        console.log('텍스트가 성공적으로 복사되었습니다.');
      } else {
        console.log('텍스트 복사에 실패했습니다.');
      }

      cardModalEvent();
    };

    return(
        <ImgBoard src='assets/svg/copy.svg' onClick={handleCopyClick} style={{ cursor: 'pointer' }}>
        </ImgBoard>
    );
};

export default CopyImage;

const ImgBoard = styled.img`
  width: 20px;
`