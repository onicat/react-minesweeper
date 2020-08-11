import React from 'react'
import { connect } from 'react-redux';

import BoardComponent from 'components/BoardComponent';
import Settings from 'models/Settings'
import Store from 'models/Store';
import { getSettings } from 'redux/selectors';

interface AppProps  {
  settings: Settings
}

const App = ({
  settings
}: AppProps) => {
  return (
    <BoardComponent/>
  );
};

const mapStateToProps = (state: Store) => ({
  settings: getSettings(state)
});

export default connect(
  mapStateToProps
)(App);
