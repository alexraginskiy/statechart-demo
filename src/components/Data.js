import React from 'react'
import sortBy from 'lodash/sortBy'
import Transis from 'transis'
import appstate from '../appstate'
import statechart from '../statechart'
import cx from 'classnames'

import DataControls from './DataControls'
import StateModal from './StateModal'
import markTerms from './markTerms'

const StateRow = ({state, highlight}) => (
  <tr onClick={() => statechart.send('stateClicked', state.name)}>
    <td>{state.rank}</td>
    <td>{markTerms(state.name, highlight, 'text-info bg-info')}</td>
    <td className="text-right">{state.population.toLocaleString()}</td>
  </tr>
)

export default React.createClass({
  mixins: [
    // eslint-disable-next-line
    Transis.ReactStateMixin(appstate,
      'data',
      'filter',
      'modal',
      'selectedState',
      'showDataControls',
      'sortedBy'
    )
  ],

  handleChangeFilter(e) {
    statechart.send('filterChanged', e.target.value)
  },

  handleChangeSort(e) {
    statechart.send('sortChanged', e.target.value)
  },

  handleClickToggleDataControls() {
    statechart.send('toggleDataControls')
  },

  render() {
    const { data, filter, sortedBy, showDataControls, selectedState, modal } = this.state
    const rows = sortedBy ? sortBy(data, sortedBy) : data

    return (
      <div>
        {modal === 'stateDetails' &&
          <StateModal
            show={modal === 'stateDetails'}
            state={selectedState}
            onClickHide={() => statechart.send('modalClosed')}
          />
        }
        {!showDataControls &&
          <button className="btn btn-sm btn-default" onClick={this.handleClickToggleDataControls}>
            Filter/sort
          </button>
        }

        <div className="row">
          {showDataControls &&
            <div className="col-xs-3">
              <DataControls
                filter={filter}
                sortedBy={sortedBy}
                onChangeFilter={this.handleChangeFilter}
                onChangeSort={this.handleChangeSort}
                onClickHide={this.handleClickToggleDataControls}
              />
            </div>
          }

          <div className={cx({ 'col-xs-9': showDataControls, 'col-xs-12': !showDataControls })}>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th style={{ width: '2em' }}>#</th>
                  <th>Name</th>
                  <th className="text-right">Population</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(usState => (
                  <StateRow key={usState.name} state={usState} highlight={filter}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
})
