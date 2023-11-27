import React from 'react';

function Filters({ greasedOnly, sortBy, toggleGreasedOnly, handleSortBy }) {
  return (
    <div className="ui form">
      <div className="field">
        <label>Sort by:</label>
        <select onChange={(e) => handleSortBy(e.target.value)} value={sortBy}>
          <option value="none">Select sort method</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
      <div className="field">
        <label>
          <input type="checkbox" checked={greasedOnly} onChange={toggleGreasedOnly} />
          Show only greased hogs
        </label>
      </div>
    </div>
  );
}

export default Filters;
