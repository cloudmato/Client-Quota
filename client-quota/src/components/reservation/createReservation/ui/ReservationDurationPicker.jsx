import React from 'react';
import styled from 'styled-components';

import InputSubTitle from './InputSubTitle';

const ReservationDurationPicker = ({ reservationDuration, setReservationDuration }) => {
    return (
        <DurationPickerContainer>
            <InputSubTitle required>예약 진행 시간</InputSubTitle>
            <InputDescription>일정이 얼마동안 진행되는지 설정합니다. 최대 12시간까지 설정 가능합니다.</InputDescription>
            <StyledSelect
                name="reservationDuration"
                value={reservationDuration}
                onChange={(e) => setReservationDuration(parseInt(e.target.value))}
                >
                {Array.from({ length: 12 }, (_, index) => (
                    <option key={index} value={index + 1}>
                        {index + 1}
                    </option>
                ))}
            </StyledSelect>
        </DurationPickerContainer>
    );
};

export default ReservationDurationPicker;

const DurationPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputDescription = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 16px;
  color: #6c757d;
`;

const StyledSelect = styled.select`
  width: 80px;
  padding: 10px;
  border: 1px solid var(--gray-color);
  border-radius: 4px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: 16px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  text-align: center;
  text-align-last: center;
  -ms-text-align-last: center;
  -moz-text-align-last: center;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;
