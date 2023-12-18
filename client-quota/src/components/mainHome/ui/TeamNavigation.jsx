import styled from "styled-components"
import Button from "@/components/common/Button"
import TeamNavigationLogo from "@/components/common/TeamNavigationLogo";

const TeamNavigation = () => {

    const MainNavBtnClick = () => {
        window.location.href = '/teams';
    }

    return (
        <TeamNavigationContainer>
            <TeamNavigationLogo></TeamNavigationLogo>
            <MainNavBtn style={{height:'44px', width:'254px', color:'white'}}>초대된 팀원 / 그룹 보기
            </MainNavBtn>
        </TeamNavigationContainer>
    );
}

export default TeamNavigation

const TeamNavigationContainer = styled.div`
    height: 104px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #DFDFDF;
`

const MainNavBtn = styled(Button)`
`