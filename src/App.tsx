import React from 'react'
import { connect } from 'react-redux';

import BoardComponent from 'components/BoardComponent';
import Settings from 'models/Settings'
import Store from 'models/Store';
import { getSettings, getStage } from 'redux/selectors';

interface AppProps  {
  settings: Settings;
  stage: string;
}

const App = ({
  settings,
  stage
}: AppProps) => {
  return (
    <BoardComponent stage={stage} settings={settings}/>
  );
};

const mapStateToProps = (state: Store) => ({
  settings: getSettings(state),
  stage: getStage(state)
});

export default connect(
  mapStateToProps
)(App);
