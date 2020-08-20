import React from 'react'
import { connect } from 'react-redux';

import BoardComponent from 'components/BoardComponent';
import Settings from 'models/Settings'
import Store from 'models/Store';
import { getSettings, getStage } from 'redux/selectors';
import PanelComponent from 'components/PanelComponent';
import styled from 'styled-components';

interface AppProps  {
  settings: Settings;
  stage: string;
}

const StyledApp = styled.div`
  display: inline-block;
`;

const App = ({
  settings,
  stage
}: AppProps) => {
  return (
    <StyledApp>
      <PanelComponent/>
      <BoardComponent stage={stage} settings={settings}/>
    </StyledApp>
  );
};

const mapStateToProps = (state: Store) => ({
  settings: getSettings(state),
  stage: getStage(state)
});

export default connect(
  mapStateToProps
)(App);
