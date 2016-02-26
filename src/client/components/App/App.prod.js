import React, { PropTypes } from 'react';

import Counter from '../Counter';
import Header from '../layout/Header';

const App = props => (
  <div>
    <Header user={props.user} />
    <hr />

    <main>
      {props.children}
    </main>

    <hr />
    <Counter count={props.count} />
  </div>
);

// Most of these will be names of top-level reducers
App.propTypes = {
  count: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired
};

export default App;
