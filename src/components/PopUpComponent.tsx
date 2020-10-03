import React, { SyntheticEvent } from 'react'
import styled from 'styled-components';

const StyledPopUpComponent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

interface PopUpComponentProps {
  isOpen: boolean;
  closePopUp: Function;
  children?: any;
}

const PopUpComponent = ({
  isOpen,
  closePopUp,
  children
}: PopUpComponentProps) => {
  if (isOpen === false) return null;
  
  const handleClosing = (event: SyntheticEvent) => {
    if (event.target !== event.currentTarget) return;

    closePopUp()
  };

  return (
    <StyledPopUpComponent onClick={handleClosing}>
      {children}
    </StyledPopUpComponent>
  )
};

export default PopUpComponent;