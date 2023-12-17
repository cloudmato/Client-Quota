import React, { useState } from 'react';
import styled from 'styled-components';

import Calendar from '../../../common/Calender';

// SelectDate 컴포넌트: 날짜 선택 UI
const SelectDate = () => {
  const [date, setDate] = useState(new Date()); 

  // 날짜 선택 핸들러
  const handleSelectDate = (selectedDates) => {
    if (selectedDates.length > 0) {
      setDate(selectedDates[selectedDates.length - 1]);
    }
  };

  // 제출 핸들러
  const handleSubmit = () => {
    const selectedDateStr = date.toISOString().split('T')[0];
    alert(`Selected Date: ${selectedDateStr}`);
  };

  return (
    <SelectDateContainer>
      <DatePickerContainer>
        <h2>날짜를 선택해주세요</h2> 
        <Calendar onSelectDate={handleSelectDate} singleSelectMode={true} /> 
      </DatePickerContainer>
      <Button onClick={handleSubmit}>확인</Button> 
    </SelectDateContainer>
  );
};

export default SelectDate;

const SelectDateContainer = styled.div`
  width: 40%;
`;

const DatePickerContainer = styled.div`
  margin-bottom: 20px;
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
