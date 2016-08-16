import React from 'react'
import cx from 'classnames'
import Transis from 'transis'

import appstate from '../appstate'

import Home from './Home'
import About from './About'
import Data from './Data'

const App = React.createClass({

  mixins: [
    // eslint-disable-next-line
    Transis.ReactStateMixin(appstate, {
      'view': []
    })
  ],

  render() {
    const { view } = this.state

    return (
      <div className="container">
        <div className="page-header">
          <h1>Statechart example app</h1>

          <ul className="nav nav-pills">
            <li className={cx({ 'active': view === 'home' })}><a href="/">Home</a></li>
            <li className={cx({ 'active': view === 'about' })}><a href="/about">About</a></li>
            <li className={cx({ 'active': view === 'data' })}><a href="/data">Little Data</a></li>
          </ul>
        </div>

        { view === 'home' && <Home /> }
        { view === 'about' && <About /> }
        { view === 'data' && <Data /> }
      </div>
    )
  }
})

export default App
