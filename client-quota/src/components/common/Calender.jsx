import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Calendar = ({ onSelectDates = () => {} , availableTime=[], singleSelectMode = false }) => {
    // 상태 관리: 현재 날짜와 선택된 날짜들
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDates, setSelectedDates] = useState([]);

    // 현재 월의 일수와 첫 요일 계산
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    // 현재 월의 날짜 배열 생성
    let daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    for (let i = 0; i < firstDayOfMonth; i++) {
        daysArray.unshift(null);
    }

    // 날짜 클릭 핸들러
    const handleDayClick = (day) => {
        if (day) {
            const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            if (singleSelectMode) {
                setSelectedDates([newDate]);
            } else {
                if (selectedDates.some(date => date.getTime() === newDate.getTime())) {
                    setSelectedDates(selectedDates.filter(date => date.getTime() !== newDate.getTime()));
                } else {
                    setSelectedDates([...selectedDates, newDate]);
                }
            }
        }
    };

    // 단일 선택 모드에서 선택된 날짜 확인
    const isSelectedSingle = (day) => {
        const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        return singleSelectMode && selectedDates.length > 0 && selectedDates[0].getTime() === checkDate.getTime();
    };

    // 이전/다음 달 이동 함수
    const prevMonth = (e) => {
        e.preventDefault();
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = (e) => {
        e.preventDefault();
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    // 월 이름 배열
    const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

    // 날짜 선택 여부 확인
    const isSelected = (day) => {
      const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      return selectedDates.some(date => date.getTime() === checkDate.getTime());
    };

    // 과거 날짜 여부 확인
    const isPast = (day) => {
        const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        return checkDate < new Date();
    };

    // 예약 불가능 요일 확인
    const isSelectableDayOfWeek = (day) => {
      const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);  
      const dayOfWeek = checkDate.getDay();
  
      // availableTime 배열을 순회하며 해당 요일이 포함되어 있는지 확인
      for (let i = 0; i < availableTime.length; i++) {
          if (availableTime[i].wDay === dayOfWeek) {
              return true; // 해당 요일이 availableTime 배열에 포함되어 있음
          }
      }
      return false; // 해당 요일이 availableTime 배열에 포함되어 있지 않음
  };

    // 선택된 날짜 변경 감지
    useEffect(() => {
      onSelectDates(selectedDates);
    }, [selectedDates]); 



  return (
      <CalendarWrapper>
        <CalendarNavigation>
          <MonthDisplay>{currentDate.getFullYear()}년 {monthNames[currentDate.getMonth()]}</MonthDisplay>
          <NavButtonContainer>
              <NavButton onClick= {prevMonth}>&lt;</NavButton>
              <NavButton onClick={nextMonth}>&gt;</NavButton>
          </NavButtonContainer>
        </CalendarNavigation>
        <CalendarTable>
          <thead>
            <tr>
              {['일', '월', '화', '수', '목', '금', '토'].map((dayName) => (
                  <CalendarHeader key={dayName}>{dayName}</CalendarHeader>
                  ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.ceil(daysArray.length / 7) }, (_, weekIndex) => (
                <tr key={weekIndex}>
                  {daysArray.slice(weekIndex * 7, weekIndex * 7 + 7).map((day, dayIndex) => (
                        <Day 
                          key={dayIndex}
                          onClick={() => !isPast(day) && isSelectableDayOfWeek(day) && handleDayClick(day)}
                          isSelectable={!isPast(day) && isSelectableDayOfWeek(day)}
                          isSelected={singleSelectMode ? isSelectedSingle(day) : isSelected(day)}
                          isPast={isPast(day)}>
                        {day}
                      </Day>
                      )
                    )
                  }
              </tr>
            ))}
          </tbody>
        </CalendarTable>
      </CalendarWrapper>
    );
};

export default Calendar;

// CalendarWrapper: 캘린더의 전체 레이아웃을 정의하는 컴포넌트
const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

// CalendarNavigation: 캘린더의 상단 내비게이션 영역을 스타일링
const CalendarNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

// MonthDisplay: 현재 월을 표시하는 영역
const MonthDisplay = styled.div`
  font-size: 18px;
`;

// NavButtonContainer: 네비게이션 버튼을 포함하는 컨테이너
const NavButtonContainer = styled.div`
  // 여기에 추가적인 스타일을 적용할 수 있습니다.
`;

// NavButton: 이전/다음 달로 이동하는 버튼
const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

// CalendarTable: 캘린더의 테이블 레이아웃을 정의
const CalendarTable = styled.table`
  width: 100%;
`;

// CalendarHeader: 캘린더의 헤더 (요일을 표시하는 부분)
const CalendarHeader = styled.th`
  padding: 10px;
  text-align: center;
`;

// Day: 캘린더의 각 날짜를 표시하는 셀
const Day = styled.td`
  padding: 10px;
  text-align: center;
  cursor: pointer;  
  border-radius: 50%;
  background-color: ${props => props.isSelected ? '#6349F6' : (props.isSelectable ? '#D3D3D3' : 'white')};
  color: ${props => !props.isSelectable ? '#D3D3D3' : 'black'};
  text-decoration: ${props => props.isSelectable ? 'none' : 'line-through'};
  &:hover {
    background-color: ${props => props.isSelectable && !props.isSelected ? '#eaeaea' : null};
  }
`;
