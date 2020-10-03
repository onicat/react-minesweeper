import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { changeSettings, restart } from 'redux/actions';

interface SettingsMenuComponentProps {
  restart: Function;
  changeSettings: Function;
  closePopUp: Function;
}

const StyledMenuButton = styled.button`
  width: 200px;
  height: 40px;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #1976d2;
  box-shadow: inset 0 -2px #1976d2;
  background-color: #2196f3;
  outline: none;
  font-size: 1em;
  border-radius: 5px;
  &:active {
    box-shadow: none;
    height: 38px;
    margin-top: 12px;
  }
`

const StyledSettingsMenuComponent = styled.div`
  height: 300px;
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

const SettingsMenuComponent = ({
  restart,
  changeSettings,
  closePopUp
}: SettingsMenuComponentProps) => {
  const handleDifficultyButtonClick = (
    width: number,
    heigth: number,
    minesNumber: number
  ) => {
    changeSettings(width, heigth, minesNumber);
    restart();
    closePopUp();
  };
  
  return (
    <StyledSettingsMenuComponent>
      <StyledMenuButton onClick={() => {handleDifficultyButtonClick(9, 9, 10)}}>
        Easy
      </StyledMenuButton>
      <StyledMenuButton onClick={() => {handleDifficultyButtonClick(16, 16, 40)}}>
        Medium
      </StyledMenuButton>
      <StyledMenuButton onClick={() => {handleDifficultyButtonClick(30, 16, 99)}}>
        Hard
      </StyledMenuButton>
      <StyledMenuButton 
        style={{marginTop: 'auto'}}
        onClick={() => closePopUp()}
      >
        Close
      </StyledMenuButton>
    </StyledSettingsMenuComponent>
  )
};

export default connect(
  null,
  {restart, changeSettings}
)(SettingsMenuComponent);