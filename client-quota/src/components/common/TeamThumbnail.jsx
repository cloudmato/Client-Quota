import styled from "styled-components"

const TeamThumbnail = (props) => {

    const {imgSrc, isTeamExist} = (props)

    return (
        <TeamThumbnailContainer>
            <img src={isTeamExist ? imgSrc :'/assets/svg/teamProfileIcon.svg'}></img>
        </TeamThumbnailContainer>
    )
}

export default TeamThumbnail


const TeamThumbnailContainer = styled.div`
    width: 73px;
    height: 73px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; 
    }
`