import React, { useState, useEffect } from "react";
import styled from "styled-components";
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";

import InputTitle from "@/components/common/InputTitle";
import InputSubTitle from "@/components/reservation/createReservation/ui/InputSubTitle";
import FormField from "../../../common/FormField";
import DateRangePicker from "./DateRangePicker";
import ReservationDurationPicker from "./ReservationDurationPicker";
import DayTimePicker from "./DayTimePicker";
import ExcludedDatesPicker from "./ExcludedDatesPicker";
import InputTextarea from "@/components/common/InputTextarea";
import InputLink from "@/components/common/InputLink";

import { postCreatedReservation } from "@/api/reservationApi";


const CreateReservationForm = () => {
    const [roomName, setRoomName] = useState('');
    const [meetingKind, setMeetingKind] = useState('');
    const [meetingLocation, setMeetingLocation] = useState('');
    const [rangeStart, setRangeStart] = useState(null);
    const [rangeEnd, setRangeEnd] = useState(null);  
    const [duration, setDuration] = useState(1); 
    const [availableTime, setAvailableTime] = useState([]);
    const [excludedDates, setExcludedDates] = useState([]);
    const [roomDescription, setRoomdescription] = useState('');
    const [roomUrl, setRoomUrl] = useState('');

    // '다음' 버튼 클릭 시 처리 함수
    //  디버깅 목적으로 콘솔에 폼 데이터 로그
    const handleNextClick = () => {
        console.log("userId: ", "userId");  //추후 수정 예정
        console.log("teamId: ", "teamId");  //추후 수정 예정
        console.log("Room Name: ", roomName);
        console.log("meetingKind: ", meetingKind);
        console.log("meetingLocation: ", meetingLocation)
        console.log("Range Start:", rangeStart);
        console.log("Range End:", rangeEnd);
        console.log("durationKind: ", "HOUR");
        console.log("Duration:", duration);
        console.log("Available Time:", availableTime);
        console.log("Excluded Dates:", excludedDates);
        console.log("Room Description:", roomDescription);
        console.log("Room URL:", roomUrl);
    };

    // 활성화된 요일과 시간을 관리하기 위한 추가 상태 훅들
    const [activeDays, setActiveDays] = useState({
        월: false, 화: false, 수: false, 목: false, 금: false, 토: false, 일: false,
    });

    const days = ["월", "화", "수", "목", "금", "토", "일"];

    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const dayToNumber = {
        "일": 0, "월": 1, "화": 2, "수": 3, "목": 4, "금": 5, "토": 6
    };

    // POST 요청을 위한 데이터 준비
    const postData = {
        "userId": 1234567,  //임의의 값
        "teamId": 22222,    //임의의 값
        "roomName": roomName,
        "meetingKind": meetingKind,
        "meetingLocation": meetingLocation,
        "rangeStart": rangeStart,
        "rangeEnd": rangeEnd,
        "duration": duration,
        "availableTime": availableTime,
        "excludeDate": excludedDates,
        "roomDescription": roomDescription,
        "roomUrl": roomUrl
    };

    // POST 요청을 보내는 부분
    const sendPostRequest = async () => {
        try {
            const resp = await postCreatedReservation(postData);
            console.log(resp);
        } catch (err) {
            console.error(err);
        }
    };

    // activeDays나 days 배열이 변경되면 해당 요일 활성화 여부 검사 후 
    // true일 경우 availableTime 형식에 맞춰 데이터 가공 후 상태를 업데이트한다. 
    useEffect(() => {
        const newAvailableTime = [];
        days.forEach((day, index) => {
            if (activeDays[day]) {
                newAvailableTime.push({
                    startTime: startTime, 
                    endTime: endTime, 
                    wDay: index
                });
            }
        });
        setAvailableTime(newAvailableTime);
    }, [activeDays, days]); 

    // 시간 변경 처리 함수
    const onTimeChange = (day, startTime, endTime) => {
        const wDay = dayToNumber[day];

        setAvailableTime(prev => {
        const existingIndex = prev.findIndex(item => item.wDay === wDay);
        const newTime = { startTime, endTime, wDay };

            if (existingIndex > -1) {
                const updatedTimes = [...prev];
                updatedTimes[existingIndex] = newTime;
                return updatedTimes;
            } else {
                return [...prev, newTime];
            }
        });
    };

    //요일 활성화 상태 토글 함수
    const toggleDayActive = (day, isActive) => {
        setActiveDays((prevActiveDays) => ({
            ...prevActiveDays,
            [day]: isActive,
        }));
    };

    return (
        <StyledReservationForm>
            <ReservationInputContainer>
                <SpaceBetweenContainer>
                    <InputFormTitle>
                        <Circle/>
                        <InputTitle>기본 정보</InputTitle>
                    </InputFormTitle>
                    <PulpleButton>다음</PulpleButton>
                </SpaceBetweenContainer>

                <Line/>

                <FormField 
                    title="예약 이름" 
                    name="roomName" 
                    placeholder="예약 이름"
                    value={roomName}
                    onChange={setRoomName}
                />

                <FormField 
                    title="미팅 방법" 
                    name="meetingKind" 
                    placeholder="미팅 방법"
                    value={meetingKind}
                    onChange={setMeetingKind}
                    description="오프라인 미팅, 온라인 미팅 등 미팅 방법을 설정해주세요."
                />

                <FormField 
                    title="미팅 장소" 
                    name="meetingLocation" 
                    placeholder="미팅 장소"
                    value={meetingLocation}
                    onChange={setMeetingLocation}
                    description="오프라인 미팅일 경우 미팅 장소, 온라인 미팅일 경우 링크 혹은 플랫폼 종류를 입력해주세요."
                />

                <Line/>
                
                <DateRangePicker
                    rangeStart={rangeStart}
                    rangeEnd={rangeEnd}
                    setRangeStart={setRangeStart}
                    setRangeEnd={setRangeEnd}    
                />    


                <ReservationDurationPicker
                    reservationDuration={duration}
                    setReservationDuration={setDuration}
                />

                <Line/>

                <SpaceBetweenContainer>
                    <DaysContainer>
                        <InputSubTitle required>요일별 가능한 시간</InputSubTitle>
                        {days.map((day) => (
                            <DayTimePicker
                                key={day}
                                day={day}
                                onTimeChange={onTimeChange}
                                isActive={activeDays[day]}
                                toggleDayActive={toggleDayActive}
                                startTime={startTime}
                                endTime={endTime}
                                setStartTime={setStartTime}
                                setEndTime={setEndTime}
                            />
                        ))}
                    </DaysContainer>
                    <VerticalLine/>
                    <DaysContainer>
                        <InputSubTitle required desc="특정 일자를 제외할 수 있습니다.">제외할 날짜</InputSubTitle>
                        <ExcludedDatesPicker
                            excludedDates={excludedDates}
                            setExcludedDates={setExcludedDates}
                        />          
                    </DaysContainer>      
             </SpaceBetweenContainer>

                <Line/>

                <InputSubTitle>설명</InputSubTitle>
                <InputTextarea
                    value={roomDescription}
                    onChange={setRoomdescription}/>

                <InputSubTitle required>예약 페이지 주소</InputSubTitle>
                <InputLink 
                    name="reservationUrl" 
                    placeholder="ReservationExample"
                    value={roomUrl}
                    onChange={setRoomUrl}>quotime.co.kr/팀링크</InputLink>
                <Line/>

                <ButtonContainer>
                    <GreyButton>취소</GreyButton>
                    <PulpleButton onClick={handleNextClick}>다음</PulpleButton>
                </ButtonContainer>
            </ReservationInputContainer>
        </StyledReservationForm>
    );
}

export default CreateReservationForm;

const StyledReservationForm = styled.form`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    overflow: hidden;
    background: white;
    border: 1px var(--gray-color) solid;
`;

const ReservationInputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5%;
`;

const SpaceBetweenContainer = styled.div`
    width: 100%;
    display: flex;  
    justify-content: space-between;
    margin-right: 5%;
`;

const InputFormTitle = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
`;

const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--primary-color);
    margin-right: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
`;

const PulpleButton = styled.div`
    width: 79px;
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
    width: 79px;
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

const Line = styled.div`
    width: 95%;
    border: 1px var(--gray-color) solid;
    margin: 10px;
`;

const DaysContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

const VerticalLine = styled.div`
    height: auto;
    border-left: 1px solid var(--gray-color);
    margin: 0 20px;
`;
