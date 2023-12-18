import styled from "styled-components"
import { useState } from 'react';
import Button from "@/components/common/Button"
import ReservationModal from "@/components/common/reservation/ReservationModal";

const TeamReservation = () => {

    return (
        <TeamReservationContainer>
            <ReservationModal/>
        </TeamReservationContainer>
    )
}

export default TeamReservation;

const TeamReservationContainer = styled.div`
    display: flex;
    background-color: #F1F1F1;
    margin: 30px;
    border-radius: 30px;
    width: 1300px;
    height: 400px;
`