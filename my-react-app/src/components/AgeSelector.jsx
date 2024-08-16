import React from 'react';

const AgeSelector = ({ age, onChange }) => (
  <div className="age-selector">
    <label>Age</label>
    <input type="number" value={age} onChange={onChange} min="0" />
  </div>
);

export default AgeSelector;
