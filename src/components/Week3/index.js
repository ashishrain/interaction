import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledButton = styled.button`
    color: #ffffff;
    background-color: ${(props) => props.color};
    padding: 1rem 3rem;
    font-size: 16px;
    border: 0;
    box-shadow: 0 0 0.5rem rbga(0,0,0.3);
    cursor: pointer;
    margin: 5%;
    :hover {
        opacity: 0.7;
    }
`;

const Button = (props) => {
    const {children, color} = props; //this is called destrucuring
    return <StyledButton color={color}> {children} </StyledButton>
};

const Week3 = () => {
    return (
        <StyledWrapper>
            <Button color="#e64b5f">Button 1</Button>
            <Button color="#1e788c">Button 2</Button>
            <Button color="#b980ff">Button 3</Button>
        </StyledWrapper>
    )
};

export default Week3;