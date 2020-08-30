import React from 'react'

import BoardComponent from 'components/BoardComponent';
import PanelComponent from 'components/PanelComponent';
import styled from 'styled-components';

const BoardContainer = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  overflow: auto;
`;

const App = () => {
  return (
    <React.Fragment>
      <PanelComponent/>
      <BoardContainer>
        <BoardComponent/>
      </BoardContainer>
    </React.Fragment>
  );
};

export default App;
