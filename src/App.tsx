import React from 'react'

import BoardComponent from 'components/BoardComponent';
import PanelComponent from 'components/PanelComponent';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: inline-block;
`;

const App = () => {
  return (
    <StyledApp>
      <PanelComponent/>
      <BoardComponent/>
    </StyledApp>
  );
};

export default App;
