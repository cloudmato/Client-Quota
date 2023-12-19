import React, { useState } from 'react';
import styled from 'styled-components';

// 예약 가능한 시간 목록(수정 예정)
const times = [
  '10:00', '11:00', '12:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
];

const TimePicker = ({ selectedTime, onTimeChange }) => {
  return (
    <TimeListWrapper>
      {times.map((time, index) => (
        <TimeSlot
          key={index}
          selected={selectedTime === time}
          onClick={() => onTimeChange(time)}
        >
          {time}
        </TimeSlot>
      ))}
    </TimeListWrapper>
  );
};


export default TimePicker;

const TimeListWrapper = styled.div`
  width: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TimeSlot = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: ${(props) => (props.selected ? 'var(--primary-color)' : 'white')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  text-align: left;

  &:hover {
    background-color: var(--primary-color);
    color: white;
    cursor: pointer;
  }
`;
