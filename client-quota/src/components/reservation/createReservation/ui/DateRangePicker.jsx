import React from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

import InputSubTitle from './InputSubTitle';

const DateRangePicker = ({ rangeStart, rangeEnd, setRangeStart, setRangeEnd }) => {
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);

  const tomorrow = new Date(dateNow);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().slice(0, 10);

  return (
    <DateRangeContainer>
      <InputSubTitle required>예약 가능한 기간</InputSubTitle>
      <InputDescription>특정 시간 범위 안에서만 예약 가능하도록 설정이 가능합니다.</InputDescription>
      <DatePickerWrapper>
        {/* 시작 날짜를 선택하기 위한 DatePicker 컴포넌트 */}
        <StyledDatePicker
          selected={rangeStart}
          onChange={setRangeStart}
          selectsStart
          placeholderText={today}
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
          dateFormat="yyyy/MM/dd"
        />
        
        {/* 종료 날짜를 선택하기 위한 DatePicker 컴포넌트 */}
        <StyledDatePicker
          selected={rangeEnd}
          onChange={setRangeEnd}
          selectsEnd
          placeholderText={tomorrowFormatted}
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
          minDate={rangeStart}
          dateFormat="yyyy/MM/dd"
        />
      </DatePickerWrapper>
    </DateRangeContainer>
  );
};

export default DateRangePicker;

const DateRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
`;

const InputDescription = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 16px;
  color: #6c757d;
`;

