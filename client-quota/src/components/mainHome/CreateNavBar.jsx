import React, { useState } from 'react';
import styled from 'styled-components';

const ParentComponent = () => {
  const [selectedSpan, setSelectedSpan] = useState(1);

  const handleSpanClick = (spanId) => {
    setSelectedSpan(spanId);
  };

  return (
    <ParentContainer>
      <Span onClick={() => handleSpanClick(1)} className={selectedSpan === 1 ? 'active' : ''}>일정</Span>
      <Span onClick={() => handleSpanClick(2)} className={selectedSpan === 2 ? 'active' : ''}>예약된 일정</Span>
      {selectedSpan === 1 && (
        <NavBarContainer left="10px" width="45px" />
      )}
      {selectedSpan === 2 && (
        <NavBarContainer left="80px" width="120px"/>
      )}
    </ParentContainer>
  );
};

const ParentContainer = styled.div`
    padding:
    border-top: 1px solid #DFDFDF;
    font-size: 25px;    
    font-style: normal;
    font-weight: 700;
    line-height: semi-bold;
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #DFDFDF;
`;

const Span = styled.span`
    color: gray;
    padding: 5px 10px;
    cursor: pointer;
    margin-right: 10px;
    user-select: none;

    &.active {
        color: black;
    }
`;

const NavBarContainer = styled.div`
    position: absolute;
    bottom: 0;
    height: 6px;
    background-color: var(--primary-color);
    left: ${props => props.left};
    width: ${props => props.width};
`
export default ParentComponent;
