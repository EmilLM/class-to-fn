import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.div`
    margin-right: 1em;
    color: ${(props) => props.theme.color.secondary.dark};
`;

function Time() {
    
    const [time, setTime] = useState('');

    useEffect(() => {
        handleTimer();
    }, []);

    function handleTimer() {
        setInterval(() => {
            updateTime();
        }, 1000 * 60);
        updateTime();
    }

    function updateTime() {
        const time = moment().format('LT');
        setTime(time)
    }

    return (
        <Wrapper>
            {time}
        </Wrapper>
    );
};

export default Time;
