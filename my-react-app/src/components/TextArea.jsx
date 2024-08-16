import React from 'react';

const TextArea = ({ label, value, onChange }) => (
  <div className="text-area">
    <label>{label}</label>
    <textarea value={value} onChange={onChange} rows="4" />
  </div>
);

export default TextArea;