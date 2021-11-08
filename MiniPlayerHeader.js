import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setPlayingGame } from 'actions';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    background-color: ${(props) => props.theme.color.boxBackground.base};
    transition:
        opacity 0.4s ease-out,
        height 0.4s ease-out;
    will-change: opacity, height;
    box-sizing: border-box;
    pointer-events: auto;
    ${(props) => props.visible ? `
        opacity: 1;
        height: 60px;
    ` : `
        opacity: 0;
        height: 0;
    `}
`;
const GameName = styled.div`
    font-size: 2rem;
`;
const CloseButton = styled.div`
    font-size: 2rem;
    cursor: pointer;
`;

function MiniPlayerHeader(props) {

    const { game, isVisible } = props;

    function onClick() {
        const {
            setPlayingGameAction,
            game: { gameType },
        } = props;
        setPlayingGameAction({
            slug: '',
            name: '',
            mode: '',
            background: '',
            url: '',
            gameType,
            isFavoriteGame: false,
        });
    };

    return (
        <Wrapper visible={isVisible}>
            <GameName>{game.name}</GameName>
            <CloseButton
                className="icon-x"
                onClick={() => onClick()}
            />
        </Wrapper>
    );
};

const mapDispatchToProps = ({
    setPlayingGameAction: setPlayingGame,
});

export default connect(null, mapDispatchToProps)(MiniPlayerHeader);
