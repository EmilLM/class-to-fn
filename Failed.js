import React from 'react';

import styled, { css, keyframes } from 'styled-components';

const strokeKeyFrames = keyframes`
    100% {
        stroke-dashoffset: 0;
    }
`
const scaleKeyFrames = keyframes`
    0%, 100% {
        transform: none;
    }
    50% {
        transform: scale3d(1.1, 1.1, 1);
    }
`
const fillKeyFrames = keyframes`
    100% {
        box-shadow: inset 0px 0px 0px 30px #d01319;
    }
`
const circleStrokeAnimation = props =>
    css`
        ${strokeKeyFrames} 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    `
const checkmarkStrokeAnimation = props =>
    css`
        ${strokeKeyFrames} 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    `
const scaleAnimation = props =>
    css`
        ${scaleKeyFrames} .3s ease-in-out .9s both;
    `
const fillAnimation = props =>
    css`
        ${fillKeyFrames} .4s ease-in-out .4s forwards;
    `

const Wrapper = styled.svg`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;
    margin: 10% auto;
    box-shadow: inset 0px 0px 0px #d01319;
    animation: ${fillAnimation}, ${scaleAnimation};
`;
const Circle = styled.circle`
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #d01319;
    fill: none;
    animation: ${circleStrokeAnimation};
`;
const X = styled.path`
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    stroke-width: 3;
    animation: ${checkmarkStrokeAnimation};
`;

function Failed() {
    return (
        <Wrapper viewBox="0 0 52 52">
            <Circle cx="26" cy="26" r="25" fill="none" />
            <X fill="none" d="M16 16 36 36 M36 16 16 36" />
        </Wrapper>
    );
};

export default Failed;
