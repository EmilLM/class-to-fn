import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { debug } from 'lib';
import PNG from 'static/img/my-account/file-types/png.svg';
import PDF from 'static/img/my-account/file-types/pdf.svg';
import JPG from 'static/img/my-account/file-types/jpg.svg';
import UNKNOWN from 'static/img/my-account/file-types/unknown.svg';

const log = debug('components:File:');
const fileNameWidth = 105;
const fileExtenstionWidth = 25;
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 30px;
    ${(props) => props.theme.mediaQuery.DEPRECATED_smDown} {
        margin-bottom: 10px;
    }
`;
const Logo = styled.img`
    height: auto;
    width: 35px;
    ${(props) => props.theme.mediaQuery.DEPRECATED_smDown} {
        display: none;
    }
`;
const Details = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 10px;
    max-width: ${fileNameWidth + fileExtenstionWidth}px;
`;
const NameWrapper = styled.div`
    display: flex;
    line-height: 1em;
    font-size: ${(props) => props.theme.fontSize.smallish};
`;
const Name = styled.div`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: ${fileNameWidth}px;
`;
const Extension = styled.span`
    width: ${fileExtenstionWidth}px;
`;
const Size = styled.div`
    font-size: ${(props) => props.theme.fontSize.smallish};
    color: ${(props) => props.theme.color.boxBackground.darker};
    ${(props) => props.theme.mediaQuery.DEPRECATED_smDown} {
        color: ${(props) => props.theme.color.textMuted.base};
    }
`;

function File({ type, name, size }) {

    let logoSRC;

    switch (type) {
        case 'png':
            logoSRC = PNG;
            break;
        case 'pdf':
            logoSRC = PDF;
            break;
        case 'jpg':
            logoSRC = JPG;
            break;
        default:
            logoSRC = UNKNOWN;
    }
    return (
        <Wrapper>
            <Logo src={logoSRC} />
            <Details>
                <NameWrapper>
                    <Name>{name}</Name>
                    <Extension>.{type}</Extension>
                </NameWrapper>
                <Size>{size}</Size>
            </Details>
        </Wrapper>
    );
};

File.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.string,
};

export default File;
