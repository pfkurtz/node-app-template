import React, { PropTypes } from 'react';

import Counter from '../Counter';
import DevTools from './DevTools';
import Header from '../layout/Header';

const App = props => (
  <div>
    <Header userRecord={props.userRecord} />
    <hr />

    <main>
      {props.children}
    </main>

    <DevTools />
  </div>
);

// Most of these will be names of top-level reducers
App.propTypes = {
  count: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
  userRecord: PropTypes.object.isRequired
};

export default App;
