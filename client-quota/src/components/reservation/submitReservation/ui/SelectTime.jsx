import React, { useState } from 'react';
import styled from 'styled-components';

import TimePicker from './TimePicker';


const SelectTime = () => {
  const [time, setTime] = useState('12:00'); 
  
  return (
    <SelectTimeContainer>
      <TimePickerContainer>
        <h2>시간 선택</h2>
        <TimePicker/>
      </TimePickerContainer>
    </SelectTimeContainer>
  );
};

export default SelectTime;

const SelectTimeContainer = styled.div`
  width: 30%;
`;


const TimePickerContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  h2 {
    min-width: 150px;
    white-space: nowrap; 
  }
`;

const Button = styled.button`
  background-color: #4e3d77;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #372956;
  }
`;
