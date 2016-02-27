import React from 'react'
import { Link } from 'react-router'

const Home = props => (
  <div>
    <h1>This is the home page</h1>
    <Link to="user/pat">pat</Link>
  </div>
)

export default Home
