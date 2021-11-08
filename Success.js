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
        box-shadow: inset 0px 0px 0px 30px #38a56b;
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
    box-shadow: inset 0px 0px 0px #38a56b;
    animation: ${fillAnimation}, ${scaleAnimation};
`;
const Circle = styled.circle`
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #38a56b;
    fill: none;
    animation: ${circleStrokeAnimation};
`;
const Checkmark = styled.path`
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    stroke-width: 3;
    animation: ${checkmarkStrokeAnimation};
`;

function Success() {
    return (
        <Wrapper viewBox="0 0 52 52">
            <Circle cx="26" cy="26" r="25" fill="none" />
            <Checkmark fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </Wrapper>
    )
};

export default Success;
