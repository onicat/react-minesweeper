import React from 'react'
import styled from "styled-components";

const StyledPanelComponent = styled.div`
  height: 40px;
  background-color: #2196f3;
  box-shadow: inset 0 -3px #1976d2;
  margin: 1px;
`;

const PanelComponent = () => {
  return (
    <StyledPanelComponent></StyledPanelComponent>
  )
};

export default PanelComponent;