import React, { useState } from 'react';
import TextArea from '../components/TextArea';
import AgeSelector from '../components/AgeSelector';
import GenderSelector from '../components/GenderSelector';
import SubmitButton from '../components/SubmitButton';
import { getRecommendations } from '../services/openaiService';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [symptoms, setSymptoms] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const recommendations = await getRecommendations(symptoms, age, gender);
    navigate('/results', { state: { recommendations } });
  };

  return (
    <div className="home-page">
      <h1>Doctor AI Platform</h1>
      <TextArea label="Patient Symptoms" value={symptoms} onChange={(e) => setSymptoms(e.target.value)} />
      <AgeSelector age={age} onChange={(e) => setAge(e.target.value)} />
      <GenderSelector gender={gender} onChange={(e) => setGender(e.target.value)} />
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
};

export default HomePage;
