import React from 'react';
import styled from 'styled-components';

import { debug } from 'lib';
import { withTranslation } from 'hocs';
import { NAMESPACES } from 'config';

const log = debug('components:UnreadMessages:');
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;
const EnvelopeIcon = styled.i`
    font-size: 3rem;
    ${(props) => props.theme.mediaQuery.DEPRECATED_xsDown} {
        font-size: 2.6rem;
    }
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    margin-left: 10px;
`;
const Title = styled.div`
    margin-bottom: 0.7em;
    line-height: 1em;
    font-size: ${(props) => props.theme.fontSize.smaller1};
    ${(props) => props.theme.mediaQuery.DEPRECATED_xsDown} {
        font-size: ${(props) => props.theme.fontSize.small1};
        margin-bottom: 0.4em;
    }
`;
const Messages = styled.div`
    line-height: 1em;
    font-size: ${(props) => props.theme.fontSize.big1};
    ${(props) => props.theme.mediaQuery.DEPRECATED_xsDown} {
        font-size: ${(props) => props.theme.fontSize.normal1};
    }
`;

function UnreadMessages({ t }) {

    const messages = 10; // TODO

    return (
        <Wrapper>
            <EnvelopeIcon className={'icon-verify_mail_1'} />
            <Content>
                <Title>{t('messages')}</Title>
                <Messages>{messages} {t('unread')}</Messages>
            </Content>
        </Wrapper>
    );
};

export default withTranslation(NAMESPACES.MY_ACCOUNT__PROFILE)(UnreadMessages);
