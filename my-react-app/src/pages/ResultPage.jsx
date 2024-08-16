import React from 'react';
import { useLocation } from 'react-router-dom';
import Recommendations from '../components/Recommendations';

const ResultPage = () => {
  const location = useLocation();
  const { recommendations } = location.state || { recommendations: {} };

  return (
    <div className="results-page">
      <Recommendations recommendations={recommendations} />
    </div>
  );
};

export default ResultPage;
