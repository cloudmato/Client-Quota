import styled from 'styled-components'
import { useEffect } from 'react'
import Button from '../common/Button';
import AOS from 'aos';

import 'aos/dist/aos.css';

// 추후 CSS 정리 및, 전체적인 비율 px이 아닌 %로 맞춰서 리팩토링 필요

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
    });
  }, [])

  return (
    <Homepage>
      <EasyPlatform>
        <EasyPlatformText data-aos='fade-up' data-aos-duration='800'>
          <h1>스타트업과 연결해주는</h1> 
          <h1>쉽고 간단한 일정 관리 플랫폼</h1>
          <p style={{fontWeight: 'thin', color: '#565353'}}>멘토링 일정을 빠르게, Quotime과 함께해요</p>
          <StartButton style={{height:'37px', width:'120px', color:'white'}} data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">시작하기</StartButton>
        </EasyPlatformText>
        <EasyPlatformImg>                        
            <img data-aos='fade-up' data-aos-duration='800' data-aos-delay='600' src='assets/svg/easyPlatform.svg' alt="easyPlatform" />
        </EasyPlatformImg>
      </EasyPlatform>
      <Reservation>
        <ReservationText>
          <p style={{color:'#6349F6'}}>미팅</p>
          <h2>쉽고 빠른 미팅 예약 생성</h2>
          <CheckContainer data-aos='fade-up' data->
              <img src='assets/svg/check.svg'/>
              <p>예약 이름과 미팅 방법 설정을 한번에</p>
          </CheckContainer>
          <CheckContainer data-aos='fade-up' data-aos-delay='200'>
              <img src='assets/svg/check.svg'/>
              <p>빠르게 예약 링크까지 생성</p>
          </CheckContainer>
          <CheckContainer data-aos='fade-up' data-aos-delay='400'>
              <img src='assets/svg/check.svg'/>
              <p>선택형 버튼으로 불가능한 날짜를 제외</p>
          </CheckContainer>
        </ReservationText>
        <ReservationImg src='assets/svg/reservation.svg' alt='reservation'/>
        <PopupImg data-aos='fade-left' src='assets/svg/reservationPopUp.svg' alt='popup'></PopupImg>
      </Reservation>
      <Progress>
          <ProgressImg data-aos='fade-up' src='assets/svg/progressReservation.svg'/>
          <ProgressText>
            <p style={{color:'white'}}>예약</p>
            <h2>예약자도 간편하게 미팅을 예약</h2>
            <CheckContainer data-aos='fade-up'>
              <img src='assets/svg/check1.svg'/>
              <p>예약 이름과 미팅 방법 설정을 한번에</p>
            </CheckContainer>
            <CheckContainer data-aos='fade-up' data-aos-delay='200'>
              <img src='assets/svg/check1.svg'/>
              <p>원하는 위치와 날짜까지 </p>
            </CheckContainer>
          </ProgressText>
      </Progress>
      <Ending data-aos='fade-up'>
        <EndingText>
          <h1>지금 모든 미팅을 </h1>
          <h1 style={{margin: '10px', color:'#5FCF9B'}}>Quotime</h1>
          <h1>과 시작 해보세요 </h1>
        </EndingText>
      </Ending>
    </Homepage>
)}

export default Home;

const Homepage = styled.div``

const EasyPlatformImg = styled.div`
  position: relative;
  width: 650px;
  height: 700px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const CheckContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 10px;
  }
`

const PopupImg = styled.img`
  position: absolute;
  top: 1000px;
  left: 850px;
  width: 122px;
  height: 150px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const ReservationImg = styled.img`
  top: 200px
  width: 590px;
  height: 380px;
  box-shadow: 0px 9px 20px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const ProgressImg = styled.img`
  top: 200px
  width: 750px;
  height: 480px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const EasyPlatform = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(to bottom, #ffffff, #F0EEFD);
`

const EasyPlatformText = styled.div`
  align-items: center;
  h1{
    margin-bottom: 30px;
  }
`

const EndingText = styled.div`
  align-items: center;
  display: flex;
  h1{
    margin-bottom: 30px;
  }
`

const ReservationText = styled.div`
  h1{
    margin-bottom: 30px;
  }
`

const ProgressText = styled.div`
  h1{
    margin-bottom: 30px;
  }
`

const Reservation = styled.div`
  display: flex;
  padding: 100px;
  justify-content: space-around;
  align-items: center;
`

const Progress = styled.div`
  display: flex;
  padding: 100px;
  justify-content: space-around;
  align-items: center;
`

const Ending = styled.div`
  display: flex;
  flex-direction: column;
  padding: 200px;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(to bottom, #ffffff, #F0EEFD);
`

const StartButton = styled(Button)`

`