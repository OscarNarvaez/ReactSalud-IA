import axios from 'axios';

// Asegúrate de reemplazar 'YOUR_OPENAI_API_KEY' con tu API Key real
const API_KEY = 'QmJqK__IvSmj1ZoVA8XyM2KzMvak8U4gRelB11I8Z4uzuIuvIuBfaT3BlbkFJrVxXfhsS_4uHIzY0gZPGaxZb';
const API_URL = 'https://api.openai.com/v1/chat/completions';

export const getRecommendations = async (symptoms, age, gender) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `The patient is ${age} years old, ${gender}, and reports the following symptoms: ${symptoms}. Please provide detailed medical recommendations.`,
          },
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const content = response.data.choices[0].message.content;

    return getRecommendations;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return {};
  }
};
