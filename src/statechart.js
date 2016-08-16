import { RoutableState } from 'statechartjs'
import appstate from './appstate'
import dataState from './states/data'

const statechart = RoutableState.define(function() {
  this.state('home', function() {
    this.route('/')
    this.enter(() => {
      appstate.view = 'home'
    })
  })

  this.state('about', function() {
    this.route('/about')
    this.enter(() => {
      appstate.view = 'about'
    })
  })

  this.state(dataState)
})

// enable logging
statechart.trace = true

window.statechart = statechart
export default statechart
