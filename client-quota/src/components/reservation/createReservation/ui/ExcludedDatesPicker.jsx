import React, { useState } from 'react';
import styled from 'styled-components';

import ExcludedCalender from './ExcludedCalender';

const ExcludedDatesPicker = ({excludedDates, setExcludedDates}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // 캘린더 열기 핸들러
  const handleOpenCalendar = (e) => {
    setIsCalendarOpen(true);
    e.preventDefault();
  };

  // 캘린더 닫기 핸들러
  const handleCloseCalendar = () => {
    setIsCalendarOpen(false);
  };

  // 날짜 추가 핸들러
  const handleAddDates = (dates) => {
    const newDates = dates.map(date => date.toISOString().split('T')[0])
      .filter(dateStr => !excludedDates.includes(dateStr));
    setExcludedDates([...excludedDates, ...newDates]);
    handleCloseCalendar();
  };
  
  // 날짜 제거 핸들러
  const handleRemoveDate = (dateToRemove) => {
    const dateToRemoveStr = dateToRemove.toISOString().split('T')[0];
    setExcludedDates(excludedDates.filter(dateStr => dateStr !== dateToRemoveStr));
  };

    // 날짜 정렬
    const sortedExcludedDates = [...excludedDates].sort((a, b) => a - b);

  return (
    <ExcludedDatesContainer>
    <AddDateButton onClick={handleOpenCalendar}>+ 제외할 날짜 추가</AddDateButton>
    {isCalendarOpen && (
      <ModalBackground onClick={handleCloseCalendar}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <ExcludedCalender onAddDates={handleAddDates} />
        </ModalContent>
      </ModalBackground>
    )}     
      <ExcludedList>
        {sortedExcludedDates.map((date, index) => {
          const formattedDate = new Date(date).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }).replace(/. /g, '년 ').replace(/. /g, '월 ').replace(/\.\s?/g, '').replace(/(\d+)$/, '$1일 ');

          return (
            <ExcludedDateItem key={index}>
              {formattedDate}
              <ExcludedDateItemDesc> 해당 날짜 제외</ExcludedDateItemDesc>
              <DeleteButton onClick={(e) => handleRemoveDate(date)}>
                <img src="assets/png/trashIcon.png" alt="trash png" />
              </DeleteButton>
            </ExcludedDateItem>
          );
        })}
      </ExcludedList>
    </ExcludedDatesContainer>
  );
};

export default ExcludedDatesPicker;

const ExcludedDatesContainer = styled.div`
`;

const AddDateButton = styled.button`
  width: 190px;
  height: 30px;
  color: var(--primary-color);
  background-color: white;
  border-radius: 20px; 
  border: 2px var(--primary-color) solid;
  font-size: 15px;
`;

const ExcludedList = styled.div`
`;

const ExcludedDateItem = styled.div`
  width: 100%;
  height: 71px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px var(--gray-color) solid;
`;

const ExcludedDateItemDesc = styled.div`
  font-size: 15px;
  color: #6c757d;
`;

const DeleteButton = styled.button`
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; 
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
