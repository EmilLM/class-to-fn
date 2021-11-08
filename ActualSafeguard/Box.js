import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { debug } from 'lib';

const log = debug('components:Box:');
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 10px;
    min-width: 300px;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: center;
    padding: 20px 30px;
    background-color: ${(props) => props.theme.color.boxBackground.base};
`;
const Title = styled.div`
    margin-bottom: 0.5em;
    text-align: center;
    color: ${(props) => props.theme.color.primary.base};
`;
const ChildrenWrapper = styled.div`
    height: 100%;
    font-size: ${(props) => props.theme.fontSize.smaller1};
    line-height: 1.7em;
    p {
        margin-bottom: 1.2em;
    }
`;
const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    min-height: 65px;
    background-color: ${(props) => props.theme.color.boxBackground.base};
    cursor: pointer;
    ${(props) => props.isActive ? `` : `
        background-color: transparent;
        pointer-events: none;
    `}
`;

function Box(props) {

    const { title, button, onButtonClick, children } = props;
    
    return (
        <Wrapper>
            <Content>
                <Title>{title}</Title>
                <ChildrenWrapper>{children}</ChildrenWrapper>
            </Content>
            <Button isActive={button} onClick={onButtonClick}>{button}</Button>
        </Wrapper>
    )
}


Box.propTypes = {
    title: PropTypes.string,
    button: PropTypes.string,
    onButtonClick: PropTypes.func,
}

export default Box;
