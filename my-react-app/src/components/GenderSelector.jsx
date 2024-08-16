import React from 'react';

const GenderSelector = ({ gender, onChange }) => (
  <div className="gender-selector">
    <label>Gender</label>
    <select value={gender} onChange={onChange}>
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>
);

export default GenderSelector;
