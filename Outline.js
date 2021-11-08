import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import values from 'lodash/values';

import { color } from 'config';
import { debug } from 'lib';

const log = debug('components:Outline:');

const Wrapper = styled.div`
    margin-right: -1px;
    padding: 3px;
    border-radius: ${(props) => props.theme.radius.circle};
    border: 2px ${(props) => props.color} solid;
`;

function Outline({ children, ...restProps }) {

    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    );
};

Outline.defaultProps = {
    color: color.text.base,
};

Outline.propTypes = {
    color: PropTypes.oneOf(values(color)),
};

export default Outline;
