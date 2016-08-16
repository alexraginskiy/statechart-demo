import React from 'react'

export default ({ filter, sortedBy, onChangeFilter, onChangeSort, onClickHide }) => (
  <div className="well">
    <div className="form-group">
      <input
        className="form-control"
        placeholder="Filter..."
        onChange={onChangeFilter}
        value={filter}
      />
    </div>
    <div className="form-group">
      <select className="form-control" placeholder="sort" onChange={onChangeSort} value={sortedBy}>
        <option value="none">No sort</option>
        <option value="name">Name</option>
        <option value="population">Population</option>
      </select>
    </div>
    <button className="btn btn-sm btn-default" onClick={onClickHide}>
      Hide
    </button>
  </div>
)
