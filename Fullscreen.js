import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
    addEvent,
    removeEvent,
    requestFullScreen,
    isFullScreen,
    exitFullScreen,
} from 'utils';
import {
    setFullscreen,
    unsetFullscreen,
} from 'actions';

import GeneralAction from './GeneralAction';

const FullscreenButton = styled(GeneralAction)``;

function Fullscreen({ unsetFullscreen, setFullscreen }) {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        return () => removeFullscreenEvents(document.body);
    });

    function toggleFullscreen(e) {
        if (isFullScreen()) {
            removeFullscreenEvents(document.body);
            exitFullScreen(document);
            onFullscreenChange(e);
            unsetFullscreen();
            setIsActive(false);
        } else {
            setFullscreen();
            requestFullScreen(document.body);
            addFullscreenEvents(document.body);
            setIsActive(true);
        }
    };

    function onFullscreenChange(e) {
        if (!isFullScreen()) {
            unsetFullscreen();
            setIsActive(false);
        }
    };

    function addFullscreenEvents(element) {
        addEvent(element, 'fullscreenchange', onFullscreenChange);
        addEvent(element, 'webkitfullscreenchange', onFullscreenChange);
        addEvent(element, 'mozfullscreenchange', onFullscreenChange);
    }

    function removeFullscreenEvents(element) {
        removeEvent(element, 'fullscreenchange', onFullscreenChange);
        removeEvent(element, 'webkitfullscreenchange', onFullscreenChange);
        removeEvent(element, 'mozfullscreenchange', onFullscreenChange);
    }

    return (
        <FullscreenButton
            active={isActive}
            className="icon-full_screen_2"
            onClick={toggleFullscreen}
        />
    );
};

const mapDispatchToProps = ({
    setFullscreen,
    unsetFullscreen,
})

export default connect(null, mapDispatchToProps)(Fullscreen);
