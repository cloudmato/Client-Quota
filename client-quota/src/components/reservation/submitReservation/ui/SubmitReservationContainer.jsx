import React from 'react';
import styled from 'styled-components';


const SubmitReservationContainer = ({ children }) => {
    return <Container>{children}</Container>;
};

export default SubmitReservationContainer;

const Container = styled.div`
    width: 80%;
    height: 70vh;
    padding: 20px;
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: row; 
`;
