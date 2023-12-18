import TeamNavigation from "@/components/mainHome/ui/TeamNavigation";
import ParentComponent from "@/components/mainHome/CreateNavBar";
import styled from "styled-components";
import TeamLanding from "@/components/mainHome/info/team/TeamLanding";
import TeamReservation from "@/components/mainHome/info/team/reservation/TeamReservationExistLanding";

const HomePage = () => {
    return (
        <HomePageContainer>
            <TeamNavigation/>
            <ParentComponent/>
            <TeamLanding/>
            <TeamReservation/>
        </HomePageContainer>
    )
}

export default HomePage;

const HomePageContainer = styled.div``