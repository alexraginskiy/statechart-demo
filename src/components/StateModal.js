import React from 'react'

export default ({ state, show, onClickHide }) => (
  <div>
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={onClickHide}>
              &times;
            </button>
            <h4 className="modal-title">{state.name}</h4>
          </div>
          <div className="modal-body">
            <p>
              {state.population.toLocaleString()} people live in {state.name}
            </p>
            <img
              alt={`${state.name} map`}
              className="img-responsive"
              src={state.image}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={onClickHide}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal-backdrop fade in" onClick={onClickHide}/>
  </div>
)
