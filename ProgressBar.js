import React from 'react';
import PropTypes from 'prop-types';

import withTranslation from 'hocs/withTranslation';
import { NAMESPACES } from 'config';

import styled from 'styled-components';

const levelsSideMargins = '10px';
const Wrapper = styled.div``;
const Progress = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Level = styled.div`
    margin: 0.5em 0 0.5em 1em;
    color: ${(props) => props.theme.color.primary.base};
    text-transform: uppercase;
`;
const Points = styled.div`
    margin: 0.5em 1.5em 0.5em 0;
    font-size: ${(props) => props.theme.fontSize.smallish};
`;
const Bar = styled.div`
    position: relative;
    height: ${(props) => props.height};
    max-width: ${(props) => props.width};
    background: #555;
    ${(props) => props.rounded ? `
        border-radius: ${props.theme.radius.circle};
    ` : ``}
    ${(props) => props.showPercentage ? `
        margin-bottom: 25px;
    ` : ``}
`;
const FilledBar = styled.div`
    position: relative;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    background-image: linear-gradient(to right, ${(props) => props.theme.gradient.primary});
    border-radius: 0 ${(props) => props.theme.radius.circle} ${(props) => props.theme.radius.circle} 0;
    ${(props) => props.rounded ? `
        border-radius: ${props.theme.radius.circle};
    ` : ``}
`;
const Levels = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${(props) => props.theme.fontSize.smaller1};
`;
const CurrentLevel = styled.div`
    margin-left: ${levelsSideMargins};
`;
const NextLevel = styled.div`
    margin-right: ${levelsSideMargins};
`;
const Percentage = styled.div`
    position: absolute;
    top: 120%;
    right: 0;
    margin: 0.1em;
    font-size: ${(props) => props.theme.fontSize.smallish};
    color: ${(props) => props.theme.color.primary.base};
`;

function ProgressBar(props) {
    
    const { t, height, width, showPercentage, showSideLevels, rounded } = props;

    const userLevel = 14; // TODO
    const userPoints = 450; // TODO
    const goalPoints = 1000; // TODO
    const percentage = 45; // TODO

    return (
        <Wrapper>
            <Progress>
                <Level>{t('level')} {userLevel}</Level>
                <Points>
                    <strong>{userPoints}/</strong>{goalPoints} {t('gp')}
                </Points>
            </Progress>
            <Bar
                height={height}
                width={width}
                rounded={rounded}
                showPercentage={showPercentage}
            >
                <FilledBar
                    height={height}
                    width={percentage + '%'}
                    rounded={rounded}
                >
                    {showPercentage && <Percentage>{percentage}%</Percentage>}
                </FilledBar>
                {showSideLevels &&
                    <Levels>
                        <CurrentLevel>{userLevel}</CurrentLevel>
                        <NextLevel>{userLevel + 1}</NextLevel>
                    </Levels>
                }
            </Bar>
        </Wrapper>
    )
}

ProgressBar.defaultProps = {
    showSideLevels: false,
    showPercentage: false,
};

ProgressBar.propTypes = {
    showSideLevels: PropTypes.bool,
    showPercentage: PropTypes.bool,
};

export default withTranslation(NAMESPACES.PROGRESS_BAR)(ProgressBar);
