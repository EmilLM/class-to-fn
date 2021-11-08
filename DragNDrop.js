import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { debug } from 'lib';
import { withTranslation } from 'hocs';
import { NAMESPACES } from 'config';
import circleSRC from 'static/img/my-account/drag-and-drop-circle.png';

const log = debug('components:DragNDrop:');
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 315px;
    width: ${(props) => props.theme.size.dragNDropVerificationBoxWidth};
    background-color: ${({ theme }) => theme.color.boxBackgroundAlt.base};

    ${(props) => props.theme.mediaQuery.DEPRECATED_smDown} {
        height: auto;
        width: auto;
    }
`;
const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 20px 15px;

    ${(props) => props.theme.mediaQuery.DEPRECATED_smDown} {
        padding: 30px 15px;
    }
`;
const Title = styled.div`
    margin-bottom: 0.3em;
    text-align: center;
    color: ${(props) => props.theme.color.primary.base};
`;
const Description = styled.div`
    text-align: center;
    line-height: 1.3em;
    color: ${(props) => props.theme.color.textAlt.base};
    font-size: ${(props) => props.theme.fontSize.smaller1};

    ${(props) => props.theme.mediaQuery.DEPRECATED_smDown} {
        max-width: 350px;
    }
`;
const Circle = styled.img`
    display: block;
    margin-top: auto;
    width: 150px;
    height: 150px;

    ${(props) => props.theme.mediaQuery.DEPRECATED_smDown} {
        display: none;
    }
`;
const Buttom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 55px;
    width: 100%;
    margin-top: auto;
    background-color: ${(props) => props.theme.color.boxBackground.base};

    ${(props) => props.theme.mediaQuery.DEPRECATED_smDown} {
        padding: 20px;
        box-sizing: border-box;
    }
`;
const AddYourFiles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) => props.theme.mediaQuery.DEPRECATED_smDown} {
        margin-bottom: 5px;
    }
`;
const PlusIcon = styled.div`
    margin-right: 10px;

    :before {
        margin: 0;
        font-size: 2.5rem;
    }
`;
const Content = styled.div`
    margin-bottom: 0.2em;
`;
const SupportedFiles = styled.div`
    display: none;

    ${(props) => props.theme.mediaQuery.DEPRECATED_smDown} {
        display: block;
        color: ${(props) => props.theme.color.textMuted.base};
    }
`;

function DragNDrop({ t, title, description }) {
    return (
        <Wrapper>
            <Main>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Circle src={circleSRC} />
            </Main>
            <Buttom>
                <AddYourFiles>
                    <PlusIcon className={'icon-arrow_thin'} />
                    <Content>{t('add-your-files')}</Content>
                </AddYourFiles>
                <SupportedFiles>{t('supported-files')}</SupportedFiles>
            </Buttom>
        </Wrapper>
    )
}

DragNDrop.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default withTranslation(NAMESPACES.MY_ACCOUNT__VERIFICATION)(DragNDrop);
