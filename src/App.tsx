import React, { useState } from 'react'

import BoardComponent from 'components/BoardComponent';
import PanelComponent from 'components/PanelComponent';
import styled from 'styled-components';
import PopUpComponent from 'components/PopUpComponent';
import SettingsMenuComponent from 'components/SettingsMenuComponent';

const BoardContainer = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  overflow: auto;
`;

const App = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  
  return (
    <React.Fragment>
      <PanelComponent openPopUp={setIsPopUpOpen.bind(null, true)}/>
      <BoardContainer>
        <BoardComponent/>
      </BoardContainer>
      <PopUpComponent 
        isOpen={isPopUpOpen}
        closePopUp={setIsPopUpOpen.bind(null, false)}
      >
        <SettingsMenuComponent/>
      </PopUpComponent>
    </React.Fragment>
  );
};

export default App;
