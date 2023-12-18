import styled from "styled-components"
import { useState } from 'react';
import Button from "@/components/common/Button"
import TeamMakeModal from "../../ui/TeamMakeModal"
import TeamThumbnail from "@/components/common/TeamThumbnail";

const EmptyTeamLanding = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    return (
        <EmptyTeamContainer>
            <TeamContainer>
                <TeamThumbnail isTeamExist={false}/>
                <p>그룹이 없습니다.</p>
            </TeamContainer>
            <MakeTeamButton style={{height:'45px', width:'121px', color:'white'}} onClick={toggleModal}>만들기 +</MakeTeamButton>
            {isModalVisible && <TeamMakeModalWrapper><TeamMakeModal onClose={toggleModal} /></TeamMakeModalWrapper>}
        </EmptyTeamContainer>
    )
}

export default EmptyTeamLanding;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 147px;
  width: 100%;
`

const EmptyTeamContainer = styled(Container)`
    border-bottom: 1px solid #DFDFDF;
`

const TeamContainer = styled(Container)`
    p{
        margin-bottom: 50px;
        margin-left: 20px;
        font-size: 20px;
        font-style: Regular;
        color: #DFDFDF; 
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