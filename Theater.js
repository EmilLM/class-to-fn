import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
    setTheater,
    unsetTheater,
} from 'actions';

import GeneralAction from './GeneralAction';

const TheaterButton = styled(GeneralAction)``;

function Theater(props) {

    function onClick() {
        const {
            isTheater,
            setTheater,
            unsetTheater,
        } = props;

        isTheater ? unsetTheater() : setTheater();
    };

    const { isTheater } = props;

    return (
        <TheaterButton
            className={`icon-${isTheater ? 'minimize' : 'maximize'}`}
            onClick={onClick}
            active={isTheater}
        />
    );
};

const mapStateToProps = (state) => ({
    isTheater: state.general.isTheater,
});

const mapDispatchToProps = ({
    setTheater,
    unsetTheater,
});

export default connect(mapStateToProps, mapDispatchToProps)(Theater);
