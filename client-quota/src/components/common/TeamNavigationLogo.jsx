import styled from "styled-components"

const TeamNavigationLogo = () => {
    return (
        <TeamNavigationLogoContainer>
            <img alt='teamNavigationLogo' src="assets/svg/logo.svg"></img>
        </TeamNavigationLogoContainer>
        
    )
}

export default TeamNavigationLogo

const TeamNavigationLogoContainer = styled.div`
    padding: 10px;
`