import React from 'react';
import styled from 'styled-components';

import { withTranslation } from 'hocs';
import { NAMESPACES } from 'config';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const Line = styled.hr`
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.color.textMuted.base};
    border: none;
    ${(props) => props.theme.mediaQuery.DEPRECATED_mdDown} {
        display: none;
    }
`;
const Button = styled.div`
    margin: 10px 0;
    padding: 0.3em 4em;
    font-size: ${(props) => props.theme.fontSize.smaller1};
    color: ${(props) => props.theme.color.textAlt.base};
    background-color: ${(props) => props.theme.color.text.base};
    border-radius: ${(props) => props.theme.radius.circle};
    text-transform: uppercase;
    cursor: pointer;
    ${(props) => props.theme.mediaQuery.DEPRECATED_mdDown} {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
        width: 180px;
        box-sizing: border-box;
        border-radius: 100px;
    }
`;

function Expand({ t, onExpandClick, isExpanded }) {
    return (
        <Wrapper>
            <Line />
            <Button onClick={onExpandClick}>
                {isExpanded ? t('retract'): t('expand')}
            </Button>
            <Line />
        </Wrapper>
    );
}

export default withTranslation(NAMESPACES.CASHIER)(Expand);
