import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { debug } from 'lib';
import { withTranslation } from 'hocs';
import { NAMESPACES } from 'config';

import File from './components/File';
import documentsSRC from 'static/img/my-account/documents.png';

const log = debug('components:UploadedFiles:');
const Wrapper = styled.div`
    position: relative;
    padding: 25px 20px;
    min-height: 150px;
    background: ${(props) => props.theme.color.boxBackground.base};
    overflow: hidden;
    ${(props) => props.theme.mediaQuery.DEPRECATED_smDown} {
        padding: 15px 10px;
        border-radius: ${(props) => props.theme.radius.soft};
    }
`;
const Title = styled.div`
    text-transform: uppercase;
    margin-bottom: 30px;
    ${(props) => props.theme.mediaQuery.DEPRECATED_smDown} {
        text-align: center;
    }
`;
const Files = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    z-index: 1;
    ${(props) => props.theme.mediaQuery.DEPRECATED_smDown} {
        display: flex;
        flex-direction: column;
    }
`;
const NoFiles = styled.div`
    position: relative;
    z-index: 1;
`;
const Documents = styled.img`
    position: absolute;
    right: 0;
    top: 50%;
    height: 100px;
    width: auto;
    padding: 20px;
    opacity: 0.2;
    transform: translateY(-50%);
    ${(props) => props.theme.mediaQuery.DEPRECATED_smDown} {
        top: auto;
        bottom: 0;
        transform: none;
    }
`;

function UploadedFiles({ t, /*files*/ }) {

    const files = [
        {
            type: 'asdf',
            name: 'photo_id_filename',
            size: '180 kB',
        },
        {
            type: 'pdf',
            name: 'proof_of_identity_bla_bla_bla_name(1)',
            size: '1 Mb',
        },
        {
            type: 'pdf',
            name: 'proof_of_identity_bla_bla_bla_name(2)',
            size: '8 Mb',
        },
        {
            type: 'png',
            name: 'proof_of_payment',
            size: '560 kB',
        },
        {
            type: 'jpg',
            name: 'back_of_card',
            size: '2 Mb',
        },
    ];

    const hasFiles = files && files.length > 0;

    return (
        <Wrapper>
            <Title>{t('uploaded-files')}</Title>
            {hasFiles ?
                <Files>
                    {files.map(file => {
                        const { type, name, size } = file;
                        return (
                            <File type={type} name={name} size={size} />
                        )
                    })}
                </Files> :
                <NoFiles>{t('no-files-uploaded')}</NoFiles>
            }
            <Documents src={documentsSRC} />
        </Wrapper>
    );
};

UploadedFiles.propTypes = {
    files: PropTypes.array,
};

export default withTranslation(NAMESPACES.MY_ACCOUNT__VERIFICATION)(UploadedFiles);
