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

    <DevTools />
  </div>
)

// Most of these will be names of top-level reducers
App.propTypes = {
  location: PropTypes.object.isRequired,
  user: PropTypes.object
}

export default App
