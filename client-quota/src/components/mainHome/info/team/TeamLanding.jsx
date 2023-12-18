import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import TeamThumbnail from '@/components/common/TeamThumbnail';
import TeamMakeModal from '../../ui/TeamMakeModal';
import Button from '@/components/common/Button';
import CopyLink from '@/components/common/copy/CopyLink';

const TeamLanding = () => {
  const [teamInfo, setTeamInfo] = useState();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  /*
  useEffect(() => {
    const apiUrl = ''; // API URl 들어갈 자리
    const teamInfo = new TeamInfo(apiUrl);

    
    const fetchTeamInfo = async () => {
      try {
        const info = await teamInfo.getTeamInfo(1);;
        setTeamInfo(info);
      } catch (error) {
        console.warn(error);
      }
    };
    
    fetchTeamInfo();
  }, []);
  */

  return (
    <EmptyTeamContainer>
      <TeamContainer>
          <TeamThumbnail isTeamExist={true} imgSrc={'assets/png/hamster.png'}/>
          <TeamInfoContainer>
            <p id='teamNames'>{'QuotaSpace'}</p>
            <TeamLink>
              <p id='teamInfo'>{'https://quotime.co.kr/quotaspace'}</p>
              <CopyLink textToCopy={'https://quotime.co.kr/quotaspace'}></CopyLink>
            </TeamLink>
          </TeamInfoContainer>
      </TeamContainer>
      <MakeTeamButton style={{height:'45px', width:'121px', color:'white'}} onClick={toggleModal}>만들기 +</MakeTeamButton>
      {isModalVisible && <TeamMakeModalWrapper><TeamMakeModal onClose={toggleModal} /></TeamMakeModalWrapper>}
    </EmptyTeamContainer>
  )
};

export default TeamLanding;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 147px;
  width: 100%;
`

const EmptyTeamContainer = styled(Container)`
    border-bottom: 1px solid #DFDFDF;
`

const TeamInfoContainer = styled.div`

`

const TeamContainer = styled(Container)`
    #teamNames{
        margin-bottom: 0px;
        margin-left: 20px;
        font-size: 30px;
        font-weight: Bold;
        color: #262626;
    }
`

const MakeTeamButton = styled(Button)`
`

const TeamMakeModalWrapper = styled.div`
  position: absolute;
  top: 41%;
  left: 91.5%;
  z-index: 1;
`;

const TeamLink = styled.div`
  display: flex;
  margin-left: 20px;

  #teamInfo{
    color: var(--primary-color);
    font-weight: Regular;
    text-decoration: underline;
  }
`