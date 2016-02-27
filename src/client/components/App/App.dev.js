import React, { PropTypes } from 'react'

import Counter from '../Counter'
import DevTools from './DevTools'
import Header from '../layout/Header'

const App = props => (
  <div>
    <Header user={props.user} />
    <hr />

    <main>
      {props.children}
    </main>

    <hr />
    <Counter count={props.count} />

    <DevTools />
  </div>
)

// Most of these will be names of top-level reducers
App.propTypes = {
  count: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
  user: PropTypes.object
}

export default App
