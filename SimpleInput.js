import React from 'react';
import styled from 'styled-components';
import { debug } from 'lib';

const log = debug('components:SimpleInput:');

const Input = styled.input`
    margin: 0 20px;
    font-family: ${({ theme }) => theme.fontFamily.primary.name};
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize.normal1};
    outline: none;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.color.text.base};

    ::placeholder {
        color: ${(props) => props.theme.color.text.base};
    }
`;

function SimpleInput({input, meta, ...restProps}) {
    return (
        <Input {...input} {...restProps} />
    )
}

export default SimpleInput;
