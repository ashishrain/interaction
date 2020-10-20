import React from 'react';
import topLeftTriangle from "./assets/top-left-triangle.png";
import runner from './assets/runner.png';
import styled from 'styled-components';


const outerWrapper = styled.div`
    background: #efefef;
    width: 100vw;
    height: 100vh;
`;

const styledWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 70vw;
    flex-direction: row-reverse;
`;

const styledHeader = styled.h1`
    text-align: center;
    color: #1e57f1;
    font-size: 50px;
`;

const Week1 = () => (
    <outerWrapper>
        <img src={topLeftTriangle} />
        <styledWrapper>
            <div>
                <img src={runner} />
                <styledHeader>Sally</styledHeader>
            </div>
        </styledWrapper>
    </outerWrapper>
);

export default Week1;