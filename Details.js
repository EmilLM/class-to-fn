import React from 'react';
import styled from 'styled-components';

import { debug } from 'lib';
import { withTranslation } from 'hocs';
import { NAMESPACES } from 'config';

const log = debug('components:Details:');
const Wrapper = styled.div`
    line-height: 1.8em;
    min-width: 300px;
    @media only screen and (max-width: 1440px) {
        grid-column: 1 / span 2;
    }
    ${(props) => props.theme.mediaQuery.DEPRECATED_xsDown} {
        min-width: auto;
    }
`;
const Legal = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    font-size: ${(props) => props.theme.fontSize.smallish};
`;
const SecureIcon = styled.i`
    color: ${(props) => props.theme.color.primary.base};
    font-size: 5rem;
    margin-bottom: 15px;
`;
const Important = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const ImportantThings = styled.ul``;
const ImportantThing = styled.li`
    font-size: ${(props) => props.theme.fontSize.smallish};
    ::before {
        content: "•";
        color: ${(props) => props.theme.color.primary.base};
        font-size: 1.7rem;
        margin-right: 0.4em;
    }
`;
const Title = styled.h5`
    text-align: center;
    font-size: ${(props) => props.theme.fontSize.normal};
    color: ${(props) => props.theme.color.primary.base};
    text-transform: uppercase;
    margin-bottom: 0.7em;
`;
const SecureInformation = styled.p`
    ${(props) => props.theme.mediaQuery.DEPRECATED_mdDown} {
        text-align: center;
    }
`;

function Details({ t }) {
    return (
        <Wrapper>
            <Legal>
                <SecureIcon className='icon-secure-shield' />
                <Title>{t('secure-confidential')}</Title>
                <SecureInformation>{t('documents-stored-secure')}</SecureInformation>
                <SecureInformation>{t('cover-sensitive-data')}</SecureInformation>
            </Legal>
            <Important>
                <Title>{t('important-things-to-remember')}</Title>
                <ImportantThings>
                    <ImportantThing>{t('images-must-be-clear')}</ImportantThing>
                    <ImportantThing>{t('images-must-be-complete-documents')}</ImportantThing>
                    <ImportantThing>{t('documents-must-be-current')}</ImportantThing>
                    <ImportantThing>{t('documents-not-older-3-months')}</ImportantThing>
                </ImportantThings>
            </Important>
        </Wrapper>
    );
};

Details.propTypes = {

};

export default withTranslation(NAMESPACES.MY_ACCOUNT__VERIFICATION)(Details);
