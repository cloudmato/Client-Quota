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
      { startTime: "11:00:00", endTime: "12:00:00", wDay: 1 },
      { startTime: "11:00:00", endTime: "12:00:00", wDay: 2 },
      { startTime: "11:00:00", endTime: "12:00:00", wDay: 3 },
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

