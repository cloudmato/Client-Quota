import React, { useEffect } from 'react';
import styled from 'styled-components';

const DayTimePicker = ({
  day,
  onTimeChange,
  isActive,
  toggleDayActive,
  startTime,
  setStartTime,
  endTime,
  setEndTime 
}) => {
  useEffect(() => {
    // 요일이 활성화되었으나 시간이 설정되지 않은 경우 기본값 설정
    if (isActive && !startTime && !endTime) {
      const defaultStartTime = '09:00';
      const defaultEndTime = '18:00';
      setStartTime(defaultStartTime);
      setEndTime(defaultEndTime);
      onTimeChange(day, defaultStartTime, defaultEndTime);
    } else if (startTime && endTime) {
      onTimeChange(day, startTime, endTime);
    }
  }, [day, startTime, endTime, isActive, onTimeChange, setStartTime, setEndTime]);

  const handleToggleActive = () => {
    toggleDayActive(day, !isActive);
  };

  const handleTimeChange = (e, isStartTime) => {
    const newTime = e.target.value;
    if (isStartTime) {
      // startTime을 변경하는 경우: startTime이 endTime보다 늦지 않도록 확인
      if (endTime && newTime >= endTime) {
        alert('시작 시간은 종료 시간보다 빨라야 합니다.');
        return;
      }
      setStartTime(newTime);
    } else {
      // endTime을 변경하는 경우: endTime이 startTime보다 이르지 않도록 확인
      if (startTime && newTime <= startTime) {
        alert('종료 시간은 시작 시간보다 늦어야 합니다.');
        return;
      }
      setEndTime(newTime);
    }
    onTimeChange(day, isStartTime ? newTime : startTime, isStartTime ? endTime : newTime);
  };

  //시간 선택 옵션 생성
  const createTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      const timeString = `${hour.toString().padStart(2, '0')}:00`;
      options.push(<option key={timeString} value={timeString}>{timeString}</option>);
    }
    return options;
  };

  return (
    <DayContainer>
      <DayName isActive={isActive} onClick={handleToggleActive}>
        {day}
      </DayName>
      {isActive ? (
        <Container>
          <TimeSelectContainer>
            <TimeSelect 
              value={startTime || '09:00'} // 기본값으로 09:00 표시
              onChange={(e) => handleTimeChange(e, true)}
            >
              {createTimeOptions()}
            </TimeSelect>
            <span> ~ </span>
            <TimeSelect 
              value={endTime || '18:00'} // 기본값으로 18:00 표시
              onChange={(e) => handleTimeChange(e, false)}
            >
              {createTimeOptions()}
            </TimeSelect>
          </TimeSelectContainer>
          <DeleteButton onClick={handleToggleActive}>
            <img src="assets/png/trashIcon.png" alt="trash icon" />
          </DeleteButton>
        </Container>
      ) : (
        <InactiveText> 가능한 시간 없음 </InactiveText>
      )}
    </DayContainer>
  );
};

export default DayTimePicker;


const DayContainer = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
`;

const DayName = styled.div`
  width: 40px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px var(--gray-color) solid;
  background-color: ${({ isActive }) => (isActive ? 'var(--primary-color)' : 'white')};
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TimeSelectContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TimeSelect = styled.select`
  width: 93px;
  height: 35px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 20px;
  border: 1px #D9D9D9 solid;
  margin: 10px;
  padding-right: 30px;
  text-align: center;
  text-align-last: center;
  background-image: url('assets/svg/downArrowIcon.svg');
  background-repeat: no-repeat;
  background-position: right 10px center;
`;

const DeleteButton = styled.button`
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
`;

const InactiveText = styled.span`
  flex-grow: 2;
  padding-left: 10px;
  text-align: left;
  color: #6c757d;
`;
