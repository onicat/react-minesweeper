import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux';

import { restart } from 'redux/actions'
import { getStage, getFlagsRemaining } from 'redux/selectors';
import Store from 'models/Store';
import { stages } from 'logic/constants';

interface PanelComponentProps {
  stage: string;
  flagsRemaining: number;
  restart: Function;
}

const StyledPanelComponent = styled.div`
  height: 40px;
  background-color: #2196f3;
  box-shadow: inset 0 -3px #1976d2;
  margin: 1px;
`;

const StyledRestartButton = styled.i`
  font-size: 2em;
`;

const PanelComponent = ({
  stage,
  flagsRemaining,
  restart
}: PanelComponentProps) => {
  let restartButtonClassName = null;

  switch (stage) {
    case stages.LOSING: {
      restartButtonClassName = 'fas fa-grimace';
      break;
    }

    case stages.WINNING: {
      restartButtonClassName = 'far fa-grin-hearts';
      break;
    }

    default: {
      restartButtonClassName = 'fas fa-grin-beam';
    }
  }
  
  return (
    <StyledPanelComponent>
      <StyledRestartButton 
        onClick={() => restart()}
        className={restartButtonClassName}
      />
      <i>{flagsRemaining}</i>
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