import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux';

import { restart } from 'redux/actions'

interface PanelComponentProps {
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

const PanelComponent = ({restart}: PanelComponentProps) => {
  return (
    <StyledPanelComponent>
      <StyledRestartButton onClick={() => restart()} className='fas fa-grin-beam'/>
    </StyledPanelComponent>
  )
};

export default connect(
  null,
  {restart}
)(PanelComponent);