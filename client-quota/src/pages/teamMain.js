import TeamNavigation from "@/components/mainHome/ui/TeamNavigation";
import ParentComponent from "@/components/mainHome/CreateNavBar";
import styled from "styled-components";
import EmptyTeamLanding from "@/components/mainHome/info/team/EmptyTeamLanding";
import TeamLanding from "@/components/mainHome/info/team/TeamLanding";
import EmptyTeamReservation from "@/components/mainHome/info/team/reservation/EmptyTeamReservationExistLanding";

const HomePage = () => {
    return (
        <HomePageContainer>
            <TeamNavigation/>
            <ParentComponent/>
            <TeamLanding/>
            <EmptyTeamReservation/>
        </HomePageContainer>
    )
}

export default HomePage;

const HomePageContainer = styled.div``