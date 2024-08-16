import React from 'react';

const Recommendations = ({ recommendations }) => (
  <div className="recommendations">
    <h2>AI Recommendations</h2>
    <p><strong>Zones Affected:</strong> {recommendations.zonesAffected}</p>
    <p><strong>Recommended Therapies:</strong> {recommendations.therapies}</p>
    <p><strong>Recommended Foods:</strong> {recommendations.foods}</p>
    <p><strong>Recommended Medications:</strong> {recommendations.medications}</p>
    <p><strong>Possible Additional Symptoms:</strong> {recommendations.additionalSymptoms}</p>
    <p><strong>Possible Disease:</strong> {recommendations.disease}</p>
  </div>
);

export default Recommendations;
