import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux';

import { restart } from 'redux/actions'
import { getStage, getFlagsRemaining } from 'redux/selectors';
import Store from 'models/Store';
import { stages } from 'logic/constants';
import inGameImg from 'img/ingame.png'
import losingImg from 'img/losing.png'
import winningImg from 'img/winning.png'
import settingsImg from 'img/settings.png'
import githubImg from 'img/github.png'

interface PanelComponentProps {
  stage: string;
  flagsRemaining: number;
  restart: Function;
  openPopUp: Function;
}

const StyledPanelComponent = styled.div`
  height: 70px;
  background-color: #2196f3;
  box-shadow: inset 0 -5px #1976d2;
  margin: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.img`
  width: 40px;
  cursor: pointer;
`;

const StyledCounter = styled.div<{
  title: string
}>`
  width: 80px;
  position: relative;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  &::before {
    content: '${({title}) => title}';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    color: #135ba3;
    font-size: 0.8em;
  }
`;

const PanelComponent = ({
  stage,
  flagsRemaining,
  restart,
  openPopUp
}: PanelComponentProps) => {
  let restartButtonImg = null;

  switch (stage) {
    case stages.LOSING: {
      restartButtonImg = losingImg;
      break;
    }

    case stages.WINNING: {
      restartButtonImg = winningImg;
      break;
    }

    default: {
      restartButtonImg = inGameImg;
    }
  }
  
  return (
    <StyledPanelComponent>
      <StyledButton 
        src={settingsImg}
        onClick={() => openPopUp()}
      />
      <StyledCounter title='Time'>0</StyledCounter>
      <StyledButton 
        onClick={() => restart()}
        src={restartButtonImg}
      />
      <StyledCounter title='Flags'>{flagsRemaining}</StyledCounter>
      <StyledButton
        src={githubImg}
        onClick={() => window.open('https://github.com/onicat/react-minesweeper')}
      />
    </StyledPanelComponent>
  )
};

const mapStateToProps = (state: Store) => ({
  stage: getStage(state),
  flagsRemaining: getFlagsRemaining(state)
});

export default connect(
  mapStateToProps,
  {restart}
)(PanelComponent);