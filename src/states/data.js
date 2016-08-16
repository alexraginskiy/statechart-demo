/* eslint-disable */
import { RoutableState } from 'statechartjs'
import appstate from '../appstate'
import usStates from '../data/us_states'

export default new RoutableState('data', { concurrent: true }, function() {
  this.route('/data')
  this.enter(() => {
    appstate.view = 'data'
  })

  this.state('filter', function() {
    this.enter(({ filter = '' }) => {
      this.params({ filter: filter || undefined })
      appstate.filter = filter
      appstate.data = usStates.filter((state) => state.name.toLowerCase().indexOf(filter.toLowerCase()) > -1)
    })

    this.event('filterChanged', (filter) => {
      this.goto('.', { force: true, context: { filter } })
    })
  })

  this.state('sort', function() {
    // history state
    this.state('sortBy', { H: true }, function() {
      this.C(({ sortBy }) => {
        if (this.resolve(sortBy)) return sortBy
      })

      this.event('sortChanged', (sortBy) => {
        if (this.resolve(sortBy)) this.goto(sortBy)
        else this.goto('off')
      })

      this.state('none', function() {
        this.enter(() => {
          appstate.sortedData = undefined
          appstate.sortedBy = 'none'
        })
      });

      ['name', 'population'].forEach(prop => {
        this.state(prop, function() {
          this.enter(() => {
            this.params({ sortBy: prop })
            appstate.sortedBy = prop
          })

          this.exit(() => this.params({ sortBy: undefined }))
        })
      })
    })
  })

  this.state('dataControls', function() {
    this.C(({ showDataControls }) => {
      if (showDataControls) return 'on'
    })

    this.state('off', function() {
      this.enter(() => {
        appstate.showDataControls = undefined
      })

      this.event('toggleDataControls', ()=> this.goto('../on'))
    })

    this.state('on', function() {
      this.enter(() => {
        this.params({ showDataControls: true })
        appstate.showDataControls = true
      })

      this.exit(() => {
        this.params({ showDataControls: undefined })
      })

      this.event('toggleDataControls', ()=> this.goto('../off'))
    })
  })

  this.state('modals', function() {
    this.C(({ modal }) => {
      if (this.resolve(modal)) return modal
    })

    this.event('stateClicked', (state) => {
      this.goto('stateDetails', { force: true, context: { state } })
    })

    this.event('modalClosed', () => this.goto('none'))

    this.state('none', function() {
      this.enter(() => {
        this.params({ modal: undefined })
        appstate.modal = undefined
      })
    })

    this.state('stateDetails', function() {
      this.enter(({ state }) => {
        this.params({
          modal: this.name,
          state
        })
        appstate.modal = this.name,
        appstate.selectedState = usStates.find(s => s.name === state)
      })

      this.exit(() => {
        this.params({ modal: undefined, state: undefined })
        appstate.modal = undefined
        appstate.selectedState = undefined
      })
    })
  })
})
