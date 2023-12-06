import React, { useState } from 'react';
import styled from 'styled-components';

import Calendar from '../../../common/Calender';
import InputSubTitle from './InputSubTitle';


const ExcludedCalender = ({onAddDates, onClose}) => {
    // 선택된 날짜들을 저장하기 위한 상태
    const [selectedDates, setSelectedDates] = useState([]);

    // 날짜 선택 핸들러 함수
    const handleDateSelect = (dates) => {
        setSelectedDates(dates);
    };

return (
    <ExcludedCalenderContainer>
        <InputFormTitle>
            <img src="assets/svg/addCalendar.svg" alt="addCalendar SVG"/>
            <InputSubTitle desc="특정 일자를 제외할 수 있습니다. ">제외할 날짜 선택</InputSubTitle>
        </InputFormTitle>

        <Line />
        
        <Calendar onSelectDate={handleDateSelect} />
        <Line />
        <InputSubTitle desc="해당 날짜들은 예약을 받지 않습니다. "></InputSubTitle>
        <ButtonContainer>
            <GreyButton onClick={onClose}>취소</GreyButton>
            <PulpleButton onClick={() => onAddDates(selectedDates)}>저장</PulpleButton>
        </ButtonContainer>
    </ExcludedCalenderContainer>
  );
};

export default ExcludedCalender;    

const ExcludedCalenderContainer = styled.div`
  width: 300px;
  height: auto;
  border-radius: 20px;
  background-color: white;
`;

const InputFormTitle = styled.div`
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  border: 1px var(--gray-color) solid;
  margin-top: 5px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

const PulpleButton = styled.div`
  width: 100%;
  height: 41px;
  border-radius: 20px;
  background: var(--primary-color);
  border: none;
  color: white;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 41px;
  cursor: pointer;
`;

const GreyButton = styled.div`
  width: 100%;
  height: 41px;
  border-radius: 20px;
  background: var(--gray-color);
  border: none;
  color: #868484;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 41px;
  cursor: pointer;
  margin-right: 5px;
`;
