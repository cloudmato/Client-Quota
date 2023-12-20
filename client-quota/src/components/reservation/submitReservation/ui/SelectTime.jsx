import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import TimePicker from './TimePicker';


const SelectTime = () => {
  const [selectedTime, setSelectedTime] = useState('12:00'); 
  const [isModalVisible, setIsModalVisible] = useState(false);

  const hendleCompleteClick = () => {
    setIsModalVisible(true);
  }

  // 선택된 시간 업데이트
  const handleTimeChange = (time) => {
    setSelectedTime(time); 
  }

  // 모달을 닫고 /main으로 이동
  const router = useRouter(); 
   
  const handleCloseModalAndRedirect = () => {
      setIsModalVisible(false); 
      router.push('/');
  };
  
  return (
    <LastSection>
      <SelectTimeContainer>
        <TimePickerContainer>
          <h2>시간 선택</h2>
          <TimePicker selectedTime={selectedTime} onTimeChange={handleTimeChange} />
        </TimePickerContainer>
      </SelectTimeContainer>
      <Button onClick={hendleCompleteClick}>완료</Button>
      {/* 모달이 띄워질 조건부 렌더링 */}
      {isModalVisible && (
               <ModalBackground>
                        <ModalContainer>
                            <CloseButton onClick={handleCloseModalAndRedirect}>
                                <img src="assets/svg/crossIcon.svg" alt="crossIcon SVG" />
                            </CloseButton>
                            <ModalContents>
                                <img src="assets/svg/checkIcon.svg" alt="checkIcon SVG"/>
                                <CompleteReservationMent>예약이 완료되었습니다.</CompleteReservationMent>
                                <BookingContents>예약 일시: 2023년 12월 25일 {selectedTime}</BookingContents>
                            </ModalContents>
                        </ModalContainer>
                    </ModalBackground>
                )}     
    </LastSection>
  );
};

export default SelectTime;

const LastSection = styled.div`
  display: block;
  flex-direction: column;
  height: 100%;
  text-align: end;
`;

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

// 모달 백그라운드
const ModalBackground = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 모달 컨테이너
const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 440px;
  display: flex; // 여기에 추가
  flex-direction: column; // 여기에 추가
  align-items: center; // 여기에 추가
  justify-content: center; // 여기에 추가
  position: relative; // 상대적 위치 설정 추가
`;

// 모달 컨텐츠
const ModalContents = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  width: 100%; 
  height: 80%;
  margin-top: -25%;
`;

// 닫기 버튼
const CloseButton = styled.div`
  background: transparent;
  border: none;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  font-size: 24px;
`;

const CompleteReservationMent = styled.div`
    font-size: 23px;
    font-weight: bold;
    margin-top: 15px;
`;

const BookingContents = styled.div`
  margin: 20px;
  font-size: 17px;
`;
const Button = styled.button`
  width: 100%;
  background-color: #4e3d77;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #372956;
  }
`;

