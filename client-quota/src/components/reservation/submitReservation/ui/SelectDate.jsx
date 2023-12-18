import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Calendar from '../../../common/Calender';

const SelectDate = () => {
  const [selectedDates, setSelectedDates] = useState([]);

  // 예약 데이터 정의
  const reservationData = {
    roomName: "first 예약 룸",
    meetingKind: "직접 만나기",
    meetingLocation: "이디야",
    rangeStart: "2023-12-25",
    rangeEnd: "2023-12-29",
    durationKind: "HOUR",
    duration: 1,
    availableTimeDTOS: [
      { startTime: "11:00:00", endTime: "12:00:00", wDay: 0 },
      { startTime: "11:00:00", endTime: "12:00:00", wDay: 1 },
      { startTime: "11:00:00", endTime: "12:00:00", wDay: 2 },
      { startTime: "11:00:00", endTime: "12:00:00", wDay: 4 },
      { startTime: "13:00:00", endTime: "17:00:00", wDay: 5 },
      { startTime: "13:00:00", endTime: "17:00:00", wDay: 6 },
    ],
    excludeDate: ["2023-12-12", "2023-05-09", "2023-05-09"],
    roomDescription: "room에 대한 설명",
    roomUrl: "firstRoomUrl",
  };

    // 날짜 선택 핸들러 함수
    const handleDateSelect = (selectedDates) => {
      console.log("Dates selected:", selectedDates);
      setSelectedDates(selectedDates);
    };

  // 제출 핸들러
  const handleSubmit = () => {
    alert(`Selected Dates: ${selectedDates.map(date => date.toISOString().split('T')[0]).join(', ')}`);
  };
  
  

  return (
    <SelectDateContainer>
      <DatePickerContainer>
        <h2>날짜를 선택해주세요</h2>
        <Calendar
          singleSelectMode={true}
          onSelectDates={handleDateSelect}
          availableTime={reservationData.availableTimeDTOS}
        />
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
