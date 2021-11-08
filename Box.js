import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { debug } from 'lib';

const log = debug('components:Box:');
const Wrapper = styled.div`
    margin: 0 10px;
    padding: 20px;
    border: 1px ${(props) => props.theme.color.text.base} solid;
    border-radius: ${(props) => props.theme.radius.soft};
    min-width: 250px;
    :first-of-type {
        margin-left: 0;
    }
    :last-of-type {
        margin-right: 0;
    }
    ${(props) => props.theme.mediaQuery.DEPRECATED_xsDown} {
        align-items: center;
        border: none;
        margin: 0;
        padding: 0;
        padding-bottom: 30px;
    }
`;
const Title = styled.div`
    font-size: ${(props) => props.theme.fontSize.bigish};
    letter-spacing: 0.1em;
    margin-bottom: 1em;
    ${(props) => props.theme.mediaQuery.DEPRECATED_xsDown} {
        font-size: ${(props) => props.theme.fontSize.bigger1};
        margin-bottom: 0.8em;
        text-align: center;
    }
`;
const ChildrenWrapper = styled.div`
    font-size: ${(props) => props.theme.fontSize.bigger};
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.color.primary.base};
    ${(props) => props.theme.mediaQuery.DEPRECATED_xsUp} {
        sub {
            font-size: ${(props) => props.theme.fontSize.smallish};
        }
    }
    ${(props) => props.theme.mediaQuery.DEPRECATED_xsDown} {
        text-align: center;
    }
`;

function Box({ title, children }) {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <ChildrenWrapper>{children}</ChildrenWrapper>
        </Wrapper>
    );
};

Box.propTypes = {
    title: PropTypes.string,
};

export default Box;
