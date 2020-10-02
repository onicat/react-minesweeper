import React from 'react'
import styled from 'styled-components';

const StyledMenuButton = styled.button`
  width: 200px;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #1976d2;
  box-shadow: inset 0 -2px #1976d2;
  background-color: #2196f3;
  outline: none;
  font-size: 1em;
  border-radius: 5px;
`

const StyledSettingsMenuComponent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #2196f3;
  box-shadow: inset 0 -5px #1976d2;
  border-radius: 5px;
`

const SettingsMenuComponent = () => {
  return (
    <StyledSettingsMenuComponent>
      <StyledMenuButton>
        Easy
      </StyledMenuButton>
      <StyledMenuButton>
        Medium
      </StyledMenuButton>
      <StyledMenuButton>
        Hard
      </StyledMenuButton>
      <StyledMenuButton style={{marginTop: '20px'}}>
        Close
      </StyledMenuButton>
    </StyledSettingsMenuComponent>
  )
};

export default SettingsMenuComponent;