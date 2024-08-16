import React from 'react';

const ResultSummary = ({ result }) => (
  <div className="result-summary">
    <h2>Diagnosis Summary</h2>
    <p>{result}</p>
  </div>
);

export default ResultSummary;
